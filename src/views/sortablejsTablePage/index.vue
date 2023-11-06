<template>
  <div class="sortablejsTable-wapper">
    <div class="tree-wapper">
      <el-tree
        :data="treeData"
        node-key="id"
        default-expand-all
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
      >
      </el-tree>
    </div>
    <div class="treeTable-wapper">
      <el-table
        ref="dragTable"
        row-key="id"
        :data="treeTableData"
        :expand-row-keys="treeTableExpandKeys"
        border
        @expand-change="treeTableExpandChange"
      >
        <el-table-column prop="name" label="名字"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs';
import treeData from "./tree.json"
export default {
  data() {
    return {
      treeData: treeData,
      defaultProps: {
        children: "children",
        label: "label",
      },
      treeTableData: [
        {
          id: "1",
          name: "张三",
          age: 11,
          desc: "法外狂徒",
          children: [
            {
              id: "2",
              name: "月尊大人",
              age: 15,
              desc: "小兰花",
              children: [
                {
                  id: "6",
                  name: "仓盐海",
                  age: 15,
                  desc: "云梦泽",
                },
              ],
            },
          ],
        },
        {
          id: "3",
          name: "凌不疑",
          age: 18,
          desc: "三三",
          children: [
            {
              id: "4",
              name: "四四",
              age: 25,
              desc: "五五",
            },
            {
              id: "5",
              name: "不知道叫什么了",
              age: 26,
              desc: "哈哈哈",
            },
          ],
        },
        {
          id: "41",
          name: "凌不疑2",
          age: 18,
          desc: "三三",
          children: [
            {
              id: "411",
              name: "四四1",
              age: 25,
              desc: "五五",
            },
            {
              id: "412",
              name: "不知道叫什么了1",
              age: 26,
              desc: "哈哈哈",
            },
          ],
        },
      ],
      flatTreeData: [],
      treeTableExpandKeys: [],
      sortableObj: null,
    };
  },
  mounted() {
    this.transverseNode(this.treeTableData, 1, (node, level, parentNode) => {
      node.level = level;
      node.parentId = parentNode ? parentNode.id : -1;
    });
    this.initSortable();
    this.getFlatNode(this.treeTableData, this.flatTreeData);
  },
  beforeDestroy() {
    if (this.sortableObj) {
      this.sortableObj.destroy();
    }
  },
  methods: {
    handleDragStart(node, ev) {
      console.log("drag start", node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log("tree drop: ", dropNode.label, dropType);
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === "计划3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf("计划3-2-2") === -1;
    },
    // 表格操作
    initSortable() {
      // 获取容器元素
      const el = this.$refs.dragTable.$el.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];

      if (!el) return;

      this.sortableObj = new Sortable(el, {
        group: "dragName",
        draggable: ".el-table__row",
        onEnd: (evt) => {
          console.log(evt)
        },
      });
    },
    getFlatNode(nodes, flatList, childrenKey = "children") {
      nodes.forEach((node) => {
        flatList.push(node);
        if (node[childrenKey] && node[childrenKey].length) {
          this.getFlatNode(node[childrenKey], flatList);
        }
      });
    },
    getTreeData(nodes, resultList) {
      const childStack = [];
      let lastNode = {};
      nodes.forEach((node) => {
        delete node.children;

        const pushNode = (dataNode) => {
          const parentNode = childStack[childStack.length - 1];
          if (parentNode) {
            parentNode.children.push(dataNode);
          } else {
            resultList.push(dataNode);
          }
        };

        if (node.level < lastNode.level) {
          childStack.length = node.level - 1;
          pushNode(node);
        } else if (node.level === lastNode.level) {
          pushNode(node);
        } else if (node.level > lastNode.level) {
          if (!lastNode.children) {
            lastNode.children = [];
          }
          childStack.push(lastNode);
          pushNode(node);
        } else {
          resultList.push(node);
        }

        lastNode = node;
      });

      return resultList;
    },
    reRender(data, dataKey) {
      if (data) {
        this[dataKey] = [];
        this.$nextTick(() => {
          this[dataKey] = data;
        });
      } else {
        const origin = [].concat(this[dataKey]);
        this[dataKey] = [];
        this.$nextTick(() => {
          this[dataKey] = origin;
        });
      }
    },
    transverseNode(nodes, level = 1, cb, parentNode, childKey = "children") {
      nodes.forEach((node) => {
        if (node[childKey] && node[childKey].length > 0) {
          this.transverseNode(node[childKey], level + 1, cb, node, childKey);
        }
        cb(node, level, parentNode);
      });
      return nodes;
    },
    treeTableExpandChange(row, expanded) {
      if (expanded) {
        this.treeTableExpandKeys.push(row.id);
      } else {
        const idx = this.treeTableExpandKeys.indexOf(row.id);
        this.treeTableExpandKeys.splice(idx, 1);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.sortablejsTable-wapper {
  display: flex;
  height: 100%;
  >div {
    height: 100%;
    overflow: auto;
  }
  .tree-wapper {
    width: 200px;
    border-right: 1px solid black;
  }
  .treeTable-wapper {
    flex: 1;
    height: 100%;
  }
}
</style>

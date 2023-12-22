export default {
	//判断preReportInfo
	eq(op) {
		if (!op) {
			return op;
		}
		if (!op.preReportInfo_style) {
			op.preReportInfo_style = "background:#00c0ef;color:#fff";
		}
		if (!op.preReportInfoLabel_style) {
			op.preReportInfoLabel_style = "background:red;color:#fff";
		}
		var ps = {
			v1_i: 0,
			v1_new_value: "",
			v2_i: 0,
			v2_new_value: ""
		};
		while (
			ps.v1_i < op.preReportInfo.length &&
			ps.v2_i < op.preReportInfoLabel.length
		) {
			if (op.preReportInfo[ps.v1_i] == op.preReportInfoLabel[ps.v2_i]) {
				ps.v1_new_value += op.preReportInfo[ps.v1_i]
					.replace("/", ">");
				ps.v2_new_value += op.preReportInfoLabel[ps.v2_i]
					.replace("/", ">");
				ps.v1_i += 1;
				ps.v2_i += 1;
				if (ps.v1_i >= op.preReportInfo.length) {
					ps.v2_new_value +=
						"" +
						op.preReportInfoLabel
							.substr(ps.v2_i)
							.replace("/", ">") +
						"";
					break;
				}
				if (ps.v2_i >= op.preReportInfoLabel.length) {
					ps.v1_new_value +=
						"" +
						op.preReportInfo
							.substr(ps.v1_i)
							.replace("/", ">") +
						"";
					break;
				}
			} else {
				ps.v1_index = ps.v1_i + 1;
				ps.v1_eq_length = 0;
				ps.v1_eq_max = 0;
				ps.v1_start = ps.v1_i + 1;
				while (ps.v1_index < op.preReportInfo.length) {
					if (
						op.preReportInfo[ps.v1_index] ==
						op.preReportInfoLabel[ps.v2_i + ps.v1_eq_length]
					) {
						ps.v1_eq_length += 1;
					} else if (ps.v1_eq_length > 0) {
						if (ps.v1_eq_max < ps.v1_eq_length) {
							ps.v1_eq_max = ps.v1_eq_length;
							ps.v1_start = ps.v1_index - ps.v1_eq_length;
						}
						ps.v1_eq_length = 0;
						break; //只寻找最近的
					}
					ps.v1_index += 1;
				}
				if (ps.v1_eq_max < ps.v1_eq_length) {
					ps.v1_eq_max = ps.v1_eq_length;
					ps.v1_start = ps.v1_index - ps.v1_eq_length;
				}

				ps.v2_index = ps.v2_i + 1;
				ps.v2_eq_length = 0;
				ps.v2_eq_max = 0;
				ps.v2_start = ps.v2_i + 1;
				while (ps.v2_index < op.preReportInfoLabel.length) {
					if (
						op.preReportInfoLabel[ps.v2_index] ==
						op.preReportInfo[ps.v1_i + ps.v2_eq_length]
					) {
						ps.v2_eq_length += 1;
					} else if (ps.v2_eq_length > 0) {
						if (ps.v2_eq_max < ps.v2_eq_length) {
							ps.v2_eq_max = ps.v2_eq_length;
							ps.v2_start = ps.v2_index - ps.v2_eq_length;
						}
						ps.v1_eq_length = 0;
						break; //只寻找最近的
					}
					ps.v2_index += 1;
				}
				if (ps.v2_eq_max < ps.v2_eq_length) {
					ps.v2_eq_max = ps.v2_eq_length;
					ps.v2_start = ps.v2_index - ps.v2_eq_length;
				}
				if (ps.v1_eq_max < op.eq_min && ps.v1_start - ps.v1_i > op.eq_index) {
					ps.v1_eq_max = 0;
				}
				if (ps.v2_eq_max < op.eq_min && ps.v2_start - ps.v2_i > op.eq_index) {
					ps.v2_eq_max = 0;
				}
				if (ps.v1_eq_max == 0 && ps.v2_eq_max == 0) {
					ps.v1_new_value +=
						"" +
						op.preReportInfo[ps.v1_i].replace("/", ">") +
						"";
					ps.v2_new_value +=
						"" +
						op.preReportInfoLabel[ps.v2_i]
							.replace("/", ">") +
						"";
					ps.v1_i += 1;
					ps.v2_i += 1;

					if (ps.v1_i >= op.preReportInfo.length) {
						ps.v2_new_value +=
							"" +
							op.preReportInfoLabel
								.substr(ps.v2_i)
								.replace("/", ">") +
							"";
						break;
					}
					if (ps.v2_i >= op.preReportInfoLabel.length) {
						ps.v1_new_value +=
							"" +
							op.preReportInfo
								.substr(ps.v1_i)
								.replace("/", ">") +
							"";
						break;
					}
				} else if (ps.v1_eq_max > ps.v2_eq_max) {
					ps.v1_new_value +=
						"" +
						op.preReportInfo
							.substr(ps.v1_i, ps.v1_start - ps.v1_i)
							.replace("/", ">") +
						"";
					ps.v1_i = ps.v1_start;
				} else {
					ps.v2_new_value +=
						"" +
						op.preReportInfoLabel
							.substr(ps.v2_i, ps.v2_start - ps.v2_i)
							.replace("/", ">") +
						"";
					ps.v2_i = ps.v2_start;
				}
			}
		}
		op.preReportInfo = ps.v1_new_value;
		op.preReportInfoLabel = ps.v2_new_value;
		return op;
	},
	//判断preReportInfo2
	eq2(op) {
		if (!op) {
			return op;
		}
		if (!op.preReportInfo2_style) {
			op.preReportInfo2_style = "background:#00c0ef;color:#fff";
		}
		if (!op.preReportInfoLabel2_style) {
			op.preReportInfoLabel2_style = "background:red;color:#fff";
		}
		var ps = {
			v1_i: 0,
			v1_new_value: "",
			v2_i: 0,
			v2_new_value: ""
		};
		while (
			ps.v1_i < op.preReportInfo2.length &&
			ps.v2_i < op.preReportInfoLabel2.length
		) {
			if (op.preReportInfo2[ps.v1_i] == op.preReportInfoLabel2[ps.v2_i]) {
				ps.v1_new_value += op.preReportInfo2[ps.v1_i]
					.replace("/", ">");
				ps.v2_new_value += op.preReportInfoLabel2[ps.v2_i]
					.replace("/", ">");
				ps.v1_i += 1;
				ps.v2_i += 1;
				if (ps.v1_i >= op.preReportInfo2.length) {
					ps.v2_new_value +=
						"" +
						op.preReportInfoLabel2
							.substr(ps.v2_i)
							.replace("/", ">") +
						"";
					break;
				}
				if (ps.v2_i >= op.preReportInfoLabel2.length) {
					ps.v1_new_value +=
						"" +
						op.preReportInfo2
							.substr(ps.v1_i)
							.replace("/", ">") +
						"";
					break;
				}
			} else {
				ps.v1_index = ps.v1_i + 1;
				ps.v1_eq_length = 0;
				ps.v1_eq_max = 0;
				ps.v1_start = ps.v1_i + 1;
				while (ps.v1_index < op.preReportInfo2.length) {
					if (
						op.preReportInfo2[ps.v1_index] ==
						op.preReportInfoLabel2[ps.v2_i + ps.v1_eq_length]
					) {
						ps.v1_eq_length += 1;
					} else if (ps.v1_eq_length > 0) {
						if (ps.v1_eq_max < ps.v1_eq_length) {
							ps.v1_eq_max = ps.v1_eq_length;
							ps.v1_start = ps.v1_index - ps.v1_eq_length;
						}
						ps.v1_eq_length = 0;
						break; //只寻找最近的
					}
					ps.v1_index += 1;
				}
				if (ps.v1_eq_max < ps.v1_eq_length) {
					ps.v1_eq_max = ps.v1_eq_length;
					ps.v1_start = ps.v1_index - ps.v1_eq_length;
				}

				ps.v2_index = ps.v2_i + 1;
				ps.v2_eq_length = 0;
				ps.v2_eq_max = 0;
				ps.v2_start = ps.v2_i + 1;
				while (ps.v2_index < op.preReportInfoLabel2.length) {
					if (
						op.preReportInfoLabel2[ps.v2_index] ==
						op.preReportInfo2[ps.v1_i + ps.v2_eq_length]
					) {
						ps.v2_eq_length += 1;
					} else if (ps.v2_eq_length > 0) {
						if (ps.v2_eq_max < ps.v2_eq_length) {
							ps.v2_eq_max = ps.v2_eq_length;
							ps.v2_start = ps.v2_index - ps.v2_eq_length;
						}
						ps.v1_eq_length = 0;
						break; //只寻找最近的
					}
					ps.v2_index += 1;
				}
				if (ps.v2_eq_max < ps.v2_eq_length) {
					ps.v2_eq_max = ps.v2_eq_length;
					ps.v2_start = ps.v2_index - ps.v2_eq_length;
				}
				if (ps.v1_eq_max < op.eq_min && ps.v1_start - ps.v1_i > op.eq_index) {
					ps.v1_eq_max = 0;
				}
				if (ps.v2_eq_max < op.eq_min && ps.v2_start - ps.v2_i > op.eq_index) {
					ps.v2_eq_max = 0;
				}
				if (ps.v1_eq_max == 0 && ps.v2_eq_max == 0) {
					ps.v1_new_value +=
						"" +
						op.preReportInfo2[ps.v1_i].replace("/", ">") +
						"";
					ps.v2_new_value +=
						"" +
						op.preReportInfoLabel2[ps.v2_i]
							.replace("/", ">") +
						"";
					ps.v1_i += 1;
					ps.v2_i += 1;

					if (ps.v1_i >= op.preReportInfo2.length) {
						ps.v2_new_value +=
							"" +
							op.preReportInfoLabel2
								.substr(ps.v2_i)
								.replace("/", ">") +
							"";
						break;
					}
					if (ps.v2_i >= op.preReportInfoLabel2.length) {
						ps.v1_new_value +=
							"" +
							op.preReportInfo2
								.substr(ps.v1_i)
								.replace("/", ">") +
							"";
						break;
					}
				} else if (ps.v1_eq_max > ps.v2_eq_max) {
					ps.v1_new_value +=
						"" +
						op.preReportInfo2
							.substr(ps.v1_i, ps.v1_start - ps.v1_i)
							.replace("/", ">") +
						"";
					ps.v1_i = ps.v1_start;
				} else {
					ps.v2_new_value +=
						"" +
						op.preReportInfoLabel2
							.substr(ps.v2_i, ps.v2_start - ps.v2_i)
							.replace("/", ">") +
						"";
					ps.v2_i = ps.v2_start;
				}
			}
		}
		op.preReportInfo2 = ps.v1_new_value;
		op.preReportInfoLabel2 = ps.v2_new_value;
		return op;
	}
};
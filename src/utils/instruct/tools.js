// 元素滑入页面区域
const DISTANCE = 100;
const DURATION = 500;
const animationMap = new WeakMap();

const ob = new IntersectionObserver(entries => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const animation = animationMap.get(entry.target);
            animation.play();
            ob.unobserve(entry.target);
        }
    }
});

function isBelowViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top > window.innerHeight;
}

const sildeIn = {
    bind(el) {
        setTimeout(() => {
            if (!isBelowViewport(el)) {
                return
            }
            const animation = el.animate(
                [
                    {
                        transform: `translateY(${DISTANCE}px)`,
                        opacity: 0.2
                    },
                    {
                        transform: `translateY(0px)`,
                        opacity: 1
                    }
                ],
                {
                    duration: DURATION
                    // easing: 'easy-in-out'
                }
            );

            animation.pause();
            animationMap.set(el, animation);
            ob.observe(el);
        }, 0);
    },
    unbind(el) {
        ob.unobserve(el);
    }
}

export { sildeIn }
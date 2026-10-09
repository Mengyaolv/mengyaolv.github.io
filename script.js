const pages = [...document.querySelectorAll(".page")];
const nav = [...document.querySelectorAll(".navigation div")];

/* 页面进入 / 离开：active 会重新切换，因此滚回来时动画能再次播放 */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const page = entry.target;
            const index = pages.indexOf(page);

            if (entry.isIntersecting) {
                page.classList.add("active");

                nav.forEach((item) => item.classList.remove("active"));
                if (nav[index]) nav[index].classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });
    },
    {
        threshold: 0.42,
        rootMargin: "-8% 0px -8% 0px"
    }
);

pages.forEach((page) => observer.observe(page));

/* 右侧页码导航 */
nav.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (!pages[index]) return;
        pages[index].scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});

/* 项目卡片点击后淡出跳转 */
document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (event) => {
        event.preventDefault();

        const url = card.href;
        document.body.classList.add("page-out");

        window.setTimeout(() => {
            window.location.href = url;
        }, 350);
    });
});

/* 键盘可访问性：Enter / Space 也能打开项目 */
document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        card.click();
    });
});

/* 页面从浏览器后退恢复时，取消淡出状态 */
window.addEventListener("pageshow", () => {
    document.body.classList.remove("page-out");
});

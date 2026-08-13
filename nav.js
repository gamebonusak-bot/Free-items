/* =========================================================
   SHARED BOTTOM NAV — nav.js
   این فایل، خود نوار پایین رو (HTML) میسازه و توی همه صفحات
   داخل <div id="bottom-nav-placeholder"></div> تزریق میکنه.

   برای اضافه/حذف/تغییر یک آیتم از منو، فقط همینجا (آرایه NAV_ITEMS)
   رو ویرایش کن؛ نیازی نیست وارد تک‌تک صفحات بشی.
   ========================================================= */

(function () {
    const NAV_ITEMS = [
        { id: 'newsBtn',       icon: 'fa-newspaper', label: 'News',    href: 'news.html',      match: 'news.html' },
        { id: 'supportBtn',    icon: 'fa-headset',    label: 'Support', href: 'conection.html', match: 'conection.html' },
        { id: 'homeBtn',       icon: 'fa-house',      label: 'Home',    href: 'index.html',     match: ['index.html', ''] },
        { id: 'signupNavBtn',  icon: 'fa-user-plus',  label: 'Sign Up', href: 'signup.html',    match: 'signup.html', badge: '+' },
        { id: 'settingsBtn',   icon: 'fa-gear',       label: 'Settings', href: null,            match: null }
    ];

    function currentPage() {
        const path = window.location.pathname.split('/').pop();
        return path || 'index.html';
    }

    function isActive(item) {
        if (!item.match) return false;
        const page = currentPage();
        return Array.isArray(item.match) ? item.match.includes(page) : item.match === page;
    }

    function buildNavHTML() {
        const itemsHTML = NAV_ITEMS.map(item => {
            const activeClass = isActive(item) ? ' active' : '';
            const badgeHTML = item.badge ? `<span class="badge">${item.badge}</span>` : '';
            return `
            <button class="nav-item${activeClass}" id="${item.id}" data-href="${item.href || ''}">
                <i class="fa-solid ${item.icon}"></i>
                <span>${item.label}</span>${badgeHTML}
            </button>`;
        }).join('');

        return `<div class="bottom-nav"><div class="nav-container">${itemsHTML}</div></div>`;
    }

    function mountNav() {
        const placeholder = document.getElementById('bottom-nav-placeholder');
        if (!placeholder) return;

        placeholder.outerHTML = buildNavHTML();

        // ناوبری خودکار برای آیتم‌هایی که href دارن (Settings چون href نداره دست‌نخورده میمونه
        // تا خود اسکریپت هر صفحه پنل تنظیمات رو باز کنه)
        document.querySelectorAll('.bottom-nav .nav-item[data-href]').forEach(btn => {
            const href = btn.getAttribute('data-href');
            if (href) {
                btn.addEventListener('click', () => {
                    window.location.href = href;
                });
            }
        });
    }

    // چون این اسکریپت باید بلافاصله بعد از placeholder توی HTML صدا زده بشه،
    // نیازی به منتظر موندن برای DOMContentLoaded نیست.
    mountNav();
})();

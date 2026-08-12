<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>گیمینگ استور - جوایز ویژه</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&display=swap');

        :root {
            --bg: #0f0f12;
            --surface: #18181f;
            --surface-hover: #22222e;
            --border: rgba(255,255,255,0.06);
            --text: #f0f0f5;
            --text-muted: #8b8b9e;
            --accent: #e11d48;
            --accent-glow: rgba(225, 29, 72, 0.4);
            --green: #10b981;
            --green-glow: rgba(16, 185, 129, 0.3);
            --radius: 16px;
            --radius-sm: 12px;
            --nav-bg: rgba(24, 24, 31, 0.85);
        }

        /* Light Theme */
        [data-theme="light"] {
            --bg: #f0f0f5;
            --surface: #ffffff;
            --surface-hover: #e8e8ee;
            --border: rgba(0,0,0,0.08);
            --text: #1a1a1e;
            --text-muted: #6b6b7e;
            --nav-bg: rgba(255, 255, 255, 0.85);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Vazirmatn', 'Segoe UI', sans-serif;
        }

        body {
            background: var(--bg);
            color: var(--text);
            min-height: 100vh;
            padding-bottom: 120px;
            line-height: 1.6;
            transition: background 0.4s ease, color 0.4s ease;
        }

        /* ===== Header ===== */
        header {
            position: sticky;
            top: 0;
            z-index: 100;
            background: rgba(15, 15, 18, 0.75);
            backdrop-filter: blur(20px) saturate(1.8);
            -webkit-backdrop-filter: blur(20px) saturate(1.8);
            border-bottom: 1px solid var(--border);
            padding: 14px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.4s ease;
        }

        [data-theme="light"] header {
            background: rgba(240, 240, 245, 0.75);
        }

        .brand {
            display: flex;
            align-items: center;
            cursor: pointer;
            text-decoration: none;
        }

        .brand-logo {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            border: 2px solid var(--border);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .brand-logo:hover {
            transform: scale(1.05);
            box-shadow: 0 0 30px var(--accent-glow);
        }

        .brand-logo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .btn-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 0.9rem;
        }

        .btn-icon:hover {
            background: var(--surface-hover);
            color: var(--text);
            transform: translateY(-2px);
            border-color: rgba(255,255,255,0.15);
            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }

        [data-theme="light"] .btn-icon {
            background: var(--surface);
            color: var(--text-muted);
        }

        [data-theme="light"] .btn-icon:hover {
            background: var(--surface-hover);
            color: var(--text);
            border-color: rgba(0,0,0,0.12);
        }

        .btn-primary {
            padding: 8px 20px;
            border-radius: 24px;
            border: none;
            background: linear-gradient(135deg, var(--accent), #fb7185);
            color: white;
            font-weight: 700;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px var(--accent-glow);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 28px var(--accent-glow);
        }

        /* ===== Main Masonry ===== */
        main {
            max-width: 1400px;
            margin: 0 auto;
            padding: 32px 24px;
        }

        .masonry {
            column-count: 5;
            column-gap: 18px;
        }

        .card {
            break-inside: avoid;
            margin-bottom: 18px;
            background: var(--surface);
            border-radius: var(--radius);
            overflow: hidden;
            border: 1px solid var(--border);
            cursor: pointer;
            position: relative;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, background 0.4s ease;
        }

        .card:hover {
            transform: translateY(-6px) scale(1.01);
            box-shadow: 0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08);
        }

        [data-theme="light"] .card:hover {
            box-shadow: 0 24px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);
        }

        .card-img-wrap {
            position: relative;
            overflow: hidden;
        }

        .card-img {
            width: 100%;
            display: block;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease;
        }

        .card:hover .card-img {
            transform: scale(1.08);
            filter: brightness(1.1);
        }

        .card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 50%);
            opacity: 0;
            transition: opacity 0.4s ease;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 16px;
        }

        .card:hover .card-overlay {
            opacity: 1;
        }

        .overlay-title {
            font-weight: 800;
            font-size: 1rem;
            margin-bottom: 4px;
        }

        .overlay-desc {
            font-size: 0.75rem;
            color: rgba(255,255,255,0.8);
        }

        .card-body {
            padding: 14px 16px;
        }

        .card-tags {
            display: flex;
            gap: 6px;
            margin-bottom: 10px;
            flex-wrap: wrap;
        }

        .tag {
            font-size: 0.65rem;
            padding: 3px 10px;
            border-radius: 20px;
            background: rgba(255,255,255,0.06);
            color: var(--text-muted);
            font-weight: 500;
            border: 1px solid var(--border);
        }

        [data-theme="light"] .tag {
            background: rgba(0,0,0,0.04);
        }

        .tag.pink {
            background: rgba(225, 29, 72, 0.12);
            color: #fb7185;
            border-color: rgba(225, 29, 72, 0.2);
        }

        .card-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 10px;
            border-top: 1px solid var(--border);
        }

        .price-box {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        /* ===== HUGE DIAMOND Image Icon ===== */
        .diamond-img {
            width: 70px;
            height: 70px;
            object-fit: contain;
            display: block;
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.8));
            transition: transform 0.3s ease;
            flex-shrink: 0;
        }

        .card:hover .diamond-img {
            transform: scale(1.15) rotate(-10deg);
        }

        .price {
            font-weight: 900;
            font-size: 1.2rem;
            color: var(--green);
            text-shadow: 0 0 20px var(--green-glow);
            letter-spacing: 0.5px;
            white-space: nowrap;
        }

        .save-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid var(--border);
            background: transparent;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            flex-shrink: 0;
        }

        .save-btn:hover {
            background: rgba(225, 29, 72, 0.15);
            color: var(--accent);
            border-color: rgba(225, 29, 72, 0.3);
        }

        /* ===== Detail Panel (Popup) ===== */
        .detail-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            z-index: 2000;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeOverlay 0.3s ease;
        }

        .detail-overlay.open {
            display: flex;
        }

        @keyframes fadeOverlay {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .detail-panel {
            background: var(--surface);
            border-radius: var(--radius);
            max-width: 500px;
            width: 100%;
            border: 1px solid var(--border);
            box-shadow: 0 32px 64px rgba(0,0,0,0.6);
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            max-height: 90vh;
            overflow-y: auto;
        }

        [data-theme="light"] .detail-panel {
            box-shadow: 0 32px 64px rgba(0,0,0,0.15);
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(40px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .detail-panel .panel-img-wrap {
            position: relative;
            background: var(--bg);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            min-height: 200px;
        }

        .detail-panel .panel-img {
            max-width: 100%;
            max-height: 320px;
            object-fit: contain;
            border-radius: var(--radius-sm);
        }

        .detail-panel .panel-close {
            position: absolute;
            top: 12px;
            left: 12px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--border);
            background: rgba(0,0,0,0.6);
            color: #fff;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(4px);
        }

        .detail-panel .panel-close:hover {
            background: var(--accent);
            transform: rotate(90deg);
        }

        .detail-panel .panel-body {
            padding: 24px 28px 28px;
        }

        .detail-panel .panel-title {
            font-size: 1.5rem;
            font-weight: 900;
            margin-bottom: 6px;
        }

        .detail-panel .panel-desc {
            color: var(--text-muted);
            font-size: 0.95rem;
            margin-bottom: 12px;
        }

        .detail-panel .panel-tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            margin-bottom: 16px;
        }

        .detail-panel .panel-tags .tag {
            font-size: 0.75rem;
            padding: 4px 14px;
        }

        .detail-panel .panel-price {
            display: flex;
            align-items: center;
            gap: 14px;
            padding-top: 16px;
            border-top: 1px solid var(--border);
        }

        .detail-panel .panel-price .price {
            font-size: 1.6rem;
        }

        .detail-panel .panel-price .diamond-img {
            width: 80px;
            height: 80px;
            filter: drop-shadow(0 0 24px rgba(59, 130, 246, 0.9));
        }

        .detail-panel .panel-action {
            margin-top: 18px;
            display: flex;
            gap: 12px;
        }

        .detail-panel .panel-action .btn-primary {
            flex: 1;
            padding: 12px;
            font-size: 0.95rem;
            text-align: center;
            border-radius: var(--radius-sm);
        }

        .detail-panel .panel-action .btn-secondary {
            flex: 1;
            padding: 12px;
            font-size: 0.95rem;
            text-align: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--border);
            background: transparent;
            color: var(--text);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .detail-panel .panel-action .btn-secondary:hover {
            background: var(--surface-hover);
            border-color: rgba(255,255,255,0.2);
        }

        /* ===== Bottom Nav ===== */
        .bottom-nav {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            background: var(--nav-bg);
            backdrop-filter: blur(20px) saturate(1.8);
            -webkit-backdrop-filter: blur(20px) saturate(1.8);
            border: 1px solid var(--border);
            border-radius: 50px;
            padding: 12px 32px;
            display: flex;
            align-items: center;
            gap: 32px;
            box-shadow: 0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);
            transition: background 0.4s ease, border-color 0.4s ease;
        }

        [data-theme="light"] .bottom-nav {
            box-shadow: 0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);
        }

        .ps-shapes {
            display: flex;
            align-items: center;
            gap: 28px;
        }

        .ps-shapes .ps-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            color: var(--text-muted);
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
        }

        .ps-shapes .ps-item:hover {
            color: var(--text);
            transform: translateY(-3px) scale(1.1);
        }

        .ps-shapes .ps-item.active {
            color: var(--text);
        }

        .ps-shapes .ps-item.active::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--accent);
            box-shadow: 0 0 12px var(--accent-glow);
        }

        .ps-shapes .ps-circle:hover { color: #4d9fff; }
        .ps-shapes .ps-triangle:hover { color: #4dff4d; }
        .ps-shapes .ps-square:hover { color: #ff4dff; }

        /* ===== FAB Support ===== */
        .fab-support {
            position: fixed;
            bottom: 28px;
            right: 28px;
            z-index: 1000;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--green), #059669);
            border: none;
            color: white;
            font-size: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 8px 32px var(--green-glow);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fab-support:hover {
            transform: scale(1.1) rotate(10deg);
            box-shadow: 0 12px 40px var(--green-glow);
        }

        /* ===== Responsive ===== */
        @media (max-width: 1200px) { .masonry { column-count: 4; } }
        @media (max-width: 900px) { .masonry { column-count: 3; } }
        @media (max-width: 600px) { 
            .masonry { column-count: 2; column-gap: 12px; } 
            main { padding: 20px 12px; }
            header { padding: 12px 16px; }
            .brand-logo { width: 40px; height: 40px; }
            .bottom-nav { padding: 10px 20px; gap: 20px; }
            .ps-shapes { gap: 20px; }
            .ps-shapes .ps-item { width: 28px; height: 28px; font-size: 1rem; }
            .detail-panel { max-width: 95%; }
            .detail-panel .panel-body { padding: 18px 20px 22px; }
            .diamond-img { width: 60px; height: 60px; }
            .detail-panel .panel-price .diamond-img { width: 70px; height: 70px; }
            .price { font-size: 1.05rem; }
            .detail-panel .panel-price .price { font-size: 1.3rem; }
            .save-btn { width: 32px; height: 32px; font-size: 0.9rem; }
        }
        @media (max-width: 380px) { 
            .masonry { column-count: 2; column-gap: 10px; } 
            .card-body { padding: 10px 12px; }
            .bottom-nav { padding: 8px 14px; gap: 14px; }
            .ps-shapes { gap: 14px; }
            .brand-logo { width: 36px; height: 36px; }
            .diamond-img { width: 50px; height: 50px; }
            .detail-panel .panel-price .diamond-img { width: 60px; height: 60px; }
            .price { font-size: 0.95rem; }
            .detail-panel .panel-price .price { font-size: 1.1rem; }
        }

        /* ===== Scrollbar ===== */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #444; }

        [data-theme="light"] ::-webkit-scrollbar-thumb { background: #bbb; }
        [data-theme="light"] ::-webkit-scrollbar-thumb:hover { background: #999; }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .card {
            animation: fadeInUp 0.6s ease backwards;
        }

        .card:nth-child(1) { animation-delay: 0.05s; }
        .card:nth-child(2) { animation-delay: 0.1s; }
        .card:nth-child(3) { animation-delay: 0.15s; }
        .card:nth-child(4) { animation-delay: 0.2s; }
        .card:nth-child(5) { animation-delay: 0.25s; }
        .card:nth-child(6) { animation-delay: 0.3s; }
        .card:nth-child(7) { animation-delay: 0.35s; }
        .card:nth-child(8) { animation-delay: 0.4s; }
        .card:nth-child(9) { animation-delay: 0.45s; }
        .card:nth-child(10) { animation-delay: 0.5s; }
        .card:nth-child(11) { animation-delay: 0.55s; }
        .card:nth-child(12) { animation-delay: 0.6s; }
        .card:nth-child(13) { animation-delay: 0.65s; }
    </style>
</head>
<body>

    <header>
        <a href="#" class="brand" id="brandLink">
            <div class="brand-logo">
                <img src="op.png" alt="Logo">
            </div>
        </a>
        <div class="header-actions">
            <button class="btn-icon" title="جستجو"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="btn-icon" id="themeToggle" title="حالت تاریک/روشن">
                <i class="fa-solid fa-moon" id="themeIcon"></i>
            </button>
            <button class="btn-icon" id="langToggle" title="تغییر زبان">
                <span id="langLabel" style="font-size:0.75rem; font-weight:700;">FA</span>
            </button>
            <button class="btn-primary">عضویت</button>
        </div>
    </header>

    <main>
        <div class="masonry" id="masonryGrid">
            <!-- Cards will be populated by JavaScript -->
        </div>
    </main>

    <!-- ===== Detail Panel (Popup) ===== -->
    <div class="detail-overlay" id="detailOverlay">
        <div class="detail-panel" id="detailPanel">
            <div class="panel-img-wrap">
                <img class="panel-img" id="panelImg" src="" alt="">
                <button class="panel-close" id="panelClose"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="panel-body">
                <h2 class="panel-title" id="panelTitle">عنوان</h2>
                <p class="panel-desc" id="panelDesc">توضیحات</p>
                <div class="panel-tags" id="panelTags"></div>
                <div class="panel-price">
                    <img class="diamond-img" src="diamond png.png" alt="Diamond">
                    <span class="price" id="panelPrice">۰</span>
                </div>
                <div class="panel-action">
                    <button class="btn-primary">خرید با الماس</button>
                    <button class="btn-secondary"><i class="fa-regular fa-bookmark"></i> ذخیره</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ===== Bottom Navigation ===== -->
    <div class="bottom-nav">
        <div class="ps-shapes">
            <div class="ps-item ps-circle"><i class="fa-regular fa-circle"></i></div>
            <div class="ps-item ps-triangle"><i class="fa-solid fa-triangle-exclamation"></i></div>
            <div class="ps-item ps-square"><i class="fa-regular fa-square"></i></div>
        </div>
    </div>

    <!-- FAB Support -->
    <button class="fab-support" title="پشتیبانی">
        <i class="fa-solid fa-headset"></i>
    </button>

    <script>
        // ===== Data =====
        const itemsData = [
            {
                id: 1,
                img: "book of time.png",
                title: "Diamond",
                desc: "Exchange your diamond with other items",
                tags: ["کمیاب", "ارز"],
                price: "۱۰,۰۰۰"
            },
            {
                id: 2,
                img: "book of hero.png",
                title: "M416 Glacier",
                desc: "Changing your silver coin with m416",
                tags: ["اسلحه", "PUBG"],
                price: "۱۰,۰۰۰"
            },
            {
                id: 3,
                img: "hut.png",
                title: "M416 Joker",
                desc: "Changing your silver coin with joker skin",
                tags: ["محدود", "اسکین"],
                price: "۴۵,۰۰۰"
            },
            {
                id: 4,
                img: "rune.png",
                title: "PNC Jacket",
                desc: "Limited pubg item",
                tags: ["پوشاک"],
                price: "۲,۵۰۰"
            },
            {
                id: 5,
                img: "book of warior.png",
                title: "Trench Coat",
                desc: "Limited pubg item",
                tags: ["کمیاب", "پوشاک"],
                price: "۱,۸۰۰"
            },
            {
                id: 6,
                img: "hero ball.png",
                title: "Bright Idea Coat",
                desc: "Limited pubg item",
                tags: ["پوشاک"],
                price: "۲,۰۰۰"
            },
            {
                id: 7,
                img: "hand of the king.png",
                title: "Emerald Edge",
                desc: "Change your silver with Vector",
                tags: ["اسلحه", "SMG"],
                price: "۳,۵۰۰"
            },
            {
                id: 8,
                img: "fire ball.png",
                title: "Season 42 AWM",
                desc: "Change your silver with AWM",
                tags: ["سیزنال", "تک‌تیرانداز"],
                price: "۸۰۰"
            },
            {
                id: 9,
                img: "fhgkl.png",
                title: "Bright Gloves",
                desc: "Achieve Limited Items",
                tags: ["دستکش", "لوازم"],
                price: "۱,۲۰۰"
            },
            {
                id: 10,
                img: "ChatGPT Image Aug 11, 2026, 08_10_30 PM.png",
                title: "Stealth Hoodie",
                desc: "Limited Pubg Item",
                tags: ["پوشاک"],
                price: "۲,۵۰۰"
            },
            {
                id: 11,
                img: "viking.png",
                title: "Wilham Putro",
                desc: "Exchange your silver with M24",
                tags: ["کمیاب", "اسلحه"],
                price: "۳,۰۰۰"
            },
            {
                id: 12,
                img: "gea.png",
                title: "Beryl M762",
                desc: "Exchange your silvers with M762",
                tags: ["اسلحه", "AR"],
                price: "۳,۰۰۰"
            },
            {
                id: 13,
                img: "haaland.png",
                title: "Steel Show SKS",
                desc: "Limited edition skin",
                tags: ["اسلحه", "DMR"],
                price: "۳,۰۰۰"
            }
        ];

        // ===== Render Cards =====
        const masonryGrid = document.getElementById('masonryGrid');

        function renderCards() {
            masonryGrid.innerHTML = '';
            itemsData.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.animationDelay = `${0.05 + index * 0.05}s`;
                card.dataset.index = index;
                card.innerHTML = `
                    <div class="card-img-wrap">
                        <img class="card-img" src="${item.img}" alt="${item.title}">
                        <div class="card-overlay">
                            <div class="overlay-title">${item.title}</div>
                            <div class="overlay-desc">${item.desc}</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-tags">
                            ${item.tags.map(t => `<span class="tag ${t === 'کمیاب' || t === 'محدود' || t === 'سیزنال' ? 'pink' : ''}">${t}</span>`).join('')}
                        </div>
                        <div class="card-footer">
                            <div class="price-box">
                                <img class="diamond-img" src="diamond png.png" alt="Diamond">
                                <span class="price">${item.price}</span>
                            </div>
                            <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => openDetail(item));
                masonryGrid.appendChild(card);
            });
        }

        // ===== Detail Panel =====
        const overlay = document.getElementById('detailOverlay');
        const panelImg = document.getElementById('panelImg');
        const panelTitle = document.getElementById('panelTitle');
        const panelDesc = document.getElementById('panelDesc');
        const panelTags = document.getElementById('panelTags');
        const panelPrice = document.getElementById('panelPrice');
        const panelClose = document.getElementById('panelClose');

        function openDetail(item) {
            panelImg.src = item.img;
            panelImg.alt = item.title;
            panelTitle.textContent = item.title;
            panelDesc.textContent = item.desc;
            panelTags.innerHTML = item.tags.map(t => 
                `<span class="tag ${t === 'کمیاب' || t === 'محدود' || t === 'سیزنال' ? 'pink' : ''}">${t}</span>`
            ).join('');
            panelPrice.textContent = item.price;
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeDetail() {
            overlay.classList.remove('open');
            document.body.style.overflow = '';
        }

        panelClose.addEventListener('click', closeDetail);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeDetail();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeDetail();
        });

        // ===== Theme Toggle =====
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fa-solid fa-moon';
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                themeIcon.className = 'fa-solid fa-sun';
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.className = 'fa-solid fa-moon';
                localStorage.setItem('theme', 'dark');
            }
        });

        // ===== Language Toggle =====
        const langToggle = document.getElementById('langToggle');
        const langLabel = document.getElementById('langLabel');

        let currentLang = localStorage.getItem('lang') || 'fa';

        const translations = {
            fa: { lang: 'FA' },
            en: { lang: 'EN' }
        };

        function applyLanguage(lang) {
            const t = translations[lang];
            langLabel.textContent = t.lang;
            document.documentElement.lang = lang === 'fa' ? 'fa' : 'en';
            document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
            localStorage.setItem('lang', lang);
            currentLang = lang;
        }

        applyLanguage(currentLang);

        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'fa' ? 'en' : 'fa';
            applyLanguage(newLang);
        });

        // ===== PlayStation Nav =====
        const psItems = document.querySelectorAll('.ps-item');
        psItems.forEach(item => {
            item.addEventListener('click', function() {
                psItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
        if (psItems.length > 0) psItems[0].classList.add('active');

        // ===== Init =====
        renderCards();
    </script>

</body>
</html>
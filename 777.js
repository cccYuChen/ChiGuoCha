// script.js
// 定義飲品菜單結構
const menuStructure = {
    "買一送一": {
        "本日買一送一": { basePrice: 0 },
        "購買": { basePrice: "時價" }
    },
    "純茶系列": {
        "蜜香紅茶": { basePrice: 25 },
        "茉香綠茶": { basePrice: 25 },
        "高山青茶": { basePrice: 25 },
        "咖啡紅茶": { basePrice: 25 },
        "黃金烏龍": { basePrice: 25 },
        "復刻紅茶": { basePrice: 30 },
        "日式玄米": { basePrice: 30 },
        "烏龍青": { basePrice: 30 },
        "烏龍綠": { basePrice: 35 },
        "炭燒鐵觀音": { basePrice: 35 },
        "冰淇淋紅茶": { basePrice: 45 }
    },
    "冬瓜系列": {
        "冬瓜茶": { basePrice: 25 },
        "冬瓜青": { basePrice: 35 },
        "冬瓜綠": { basePrice: 35 },
        "冬瓜紅": { basePrice: 35 },
        "冬瓜珍珠": { basePrice: 35 },
        "冬瓜鮮奶": { basePrice: 50 }
    },
    "愛玉系列": {
        "檸檬愛玉": { basePrice: 45 },
        "冬瓜愛玉": { basePrice: 45 },
        "紅茶愛玉": { basePrice: 45 },
        "梅子愛玉": { basePrice: 45 },
        "珍珠愛玉": { basePrice: 45 },
        "奇亞子愛玉": { basePrice: 45 },
        "山粉圓愛玉": { basePrice: 45 },
        "百香果愛玉": { basePrice: 50 }
    },
    "特調系列": {
        "梅子綠": { basePrice: 30 },
        "梅子青": { basePrice: 30 },
        "凍檸茶": { basePrice: 35 },
        "檸檬煉乳": { basePrice: 50 },
        "蜜茶": { basePrice: 30 },
        "蜂蜜綠": { basePrice: 35 },
        "蜂蜜青": { basePrice: 35 },
        "蜂蜜紅": { basePrice: 35 },
        "蜂蜜檸檬": { basePrice: 50 },
        "百香綠": { basePrice: 50 },
        "百香青": { basePrice: 50 },
        "百香檸檬": { basePrice: 55 },
        "蜜桃烏龍": { basePrice: 45 },
        "荔枝烏龍": { basePrice: 45 },
        "金桔檸檬": { basePrice: 50 },
        "金桔百香": { basePrice: 50 }
    },
    "咖啡系列": {
        "黑咖啡": { basePrice: 50 },
        "特調咖啡": { basePrice: 55 },
        "拿鐵咖啡": { basePrice: 60 }
    },
    "鮮奶系列": {
        "蜜香鮮奶紅": { basePrice: 50 },
        "茉香鮮奶綠": { basePrice: 50 },
        "高山鮮奶青": { basePrice: 50 },
        "招牌鮮奶茶": { basePrice: 50 },
        "烏龍鮮奶茶": { basePrice: 50 },
        "復刻鮮奶茶": { basePrice: 55 },
        "玄米鮮奶茶": { basePrice: 55 },
        "沖繩鮮奶茶": { basePrice: 60 },
        "鐵觀音鮮奶茶": { basePrice: 60 },
        "冰淇淋鮮奶茶": { basePrice: 70 },
        "珍珠鮮奶茶": { basePrice: 60 },
        "阿華田鮮奶茶": { basePrice: 60 },
        "巧克力鮮奶茶": { basePrice: 60 },
        "草莓鮮奶茶": { basePrice: 70 },
        "芋泥鮮奶茶": { basePrice: 70 },
        "桂圓鮮奶茶": { basePrice: 65 },
        "黑糖薑汁鮮奶茶": { basePrice: 65 },
        "綠豆沙牛奶": { basePrice: 55 },
        "紅豆沙牛奶": { basePrice: 55 },
        "芝麻歐蕾": { basePrice: 60 },
        "抹茶歐蕾": { basePrice: 60 }
    },
    "奶茶系列": {
        "蜜香奶茶": { basePrice: 35 },
        "茉香綠奶茶": { basePrice: 35 },
        "高山青奶茶": { basePrice: 35 },
        "招牌奶茶": { basePrice: 35 },
        "烏龍奶茶": { basePrice: 35 },
        "復刻奶茶": { basePrice: 40 },
        "玄米奶茶": { basePrice: 40 },
        "沖繩奶茶": { basePrice: 45 },
        "鐵觀音奶茶": { basePrice: 45 },
        "冰淇淋奶茶": { basePrice: 55 },
        "珍珠奶茶": { basePrice: 45 },
        "阿華田奶茶": { basePrice: 45 },
        "巧克力奶茶": { basePrice: 45 },
        "草莓奶茶": { basePrice: 55 },
        "芋泥奶茶": { basePrice: 55 },
        "桂圓奶茶": { basePrice: 55 },
        "黑糖薑汁奶茶": { basePrice: 55 }
    },
    "多多系列": {
        "檸檬多多": { basePrice: 40 },
        "綠茶多多": { basePrice: 40 },
        "鮮奶多多": { basePrice: 50 },
        "多多紅": { basePrice: 40 },
        "多多綠": { basePrice: 40 },
        "多多青": { basePrice: 40 },
        "柳橙多多": { basePrice: 60 },
        "芒果多多": { basePrice: 70 },
        "葡萄柚多多": { basePrice: 60 },
        "草莓多多": { basePrice: 65 },
        "百香果多多": { basePrice: 60 },
        "百香鮮奶多多": { basePrice: 70 },
        "香蕉多多": { basePrice: 55 },
        "奇異果多多": { basePrice: 55 },
        "紅龍果多多": { basePrice: 55 },
        "鳳梨多多": { basePrice: 55 },
        "芭樂多多": { basePrice: 55 }
    },
    "多酚系列": { 
        "檸檬多酚": { basePrice: 40 },
        "綠茶多酚": { basePrice: 40 },
        "鮮奶多酚": { basePrice: 50 },
        "紅龍果多酚": { basePrice: 55 },   
        "鳳梨多酚": { basePrice: 55 },
        "芭樂多酚": { basePrice: 55 },
    },
    "果茶系列": {
        "招牌水果茶": { basePrice: 60 },
        "鮮榨葡萄柚綠": { basePrice: 60 },
        "柳橙柚綠": { basePrice: 60 },
        "柳橙柚青": { basePrice: 60 },
        "鳳梨冰茶": { basePrice: 60 },
        "鳳梨鮮茶": { basePrice: 60 },
        "夏威夷水果茶": { basePrice: 60 },
        "奇異果綠茶": { basePrice: 60 },
        "檸檬汁": { basePrice: 50 },
        "柳橙檸檬汁": { basePrice: 50 },
        "百香雙Q": { basePrice: 65 },
        "芭樂梅蜜": { basePrice: 60 },
        "鮮柚蜂蜜": { basePrice: 60 },
        "鮮柚特調": { basePrice: 70 },
        "愛文芒果冰鑽": { basePrice: 80 }
    },
    "養生茶系列": {
        "黑糖薑母茶": { basePrice: 55 },
        "桂圓茶": { basePrice: 55 },
        "桂圓紅棗茶": { basePrice: 55 },
        "綜合黑芝麻茶飲": { basePrice: 60 },
        "綜合杏仁核桃茶飲": { basePrice: 60 },
        "綜合穀類茶飲": { basePrice: 60 }
    },
    "舒果汁系列": {
        "綜合果汁": { basePrice: 55 },
        "蘋果汁": { basePrice: 50 },
        "西瓜汁": { basePrice: 50 },
        "奇異果汁": { basePrice: 55 },
        "奇異果鳳梨": { basePrice: 55 },
        "柳橙汁": { basePrice: 50 },
        "青檸芭樂汁": { basePrice: 55 },
        "鳳梨汁": { basePrice: 55 },
        "鳳梨蘋果汁": { basePrice: 55 },
        "百香果汁": { basePrice: 50 },
        "香蕉鳳梨": { basePrice: 55 },
        "排毒蔬果汁": { basePrice: 65 }
    },
    "鮮果牛奶": { 
        "木瓜牛奶": { basePrice: 55 },
        "蘋果牛奶": { basePrice: 55 },
        "香蕉牛奶": { basePrice: 55 },
        "香蕉可可奶昔": { basePrice: 60 },
        "西瓜牛奶": { basePrice: 60 },
        "西瓜木瓜牛奶": { basePrice: 65 },
        "酪梨牛奶": { basePrice: 70 },
        "紅果牛奶": { basePrice: 55 },
        "芒果牛奶": { basePrice: 60 },
        "草莓牛奶": { basePrice: 70 }
    },
    "冰沙系列": {
        "奶茶冰沙": { basePrice: 50 },
        "可可冰沙": { basePrice: 50 },
        "巧克力冰沙": { basePrice: 50 },
        "冬瓜檸檬冰沙": { basePrice: 50 },
        "蜂蜜檸檬冰沙": { basePrice: 50 },
        "多多冰沙": { basePrice: 50 },
        "多多綠冰沙": { basePrice: 50 },
        "多酚綠冰沙": { basePrice: 50 },
        "紅豆冰沙": { basePrice: 50 },
        "綠豆冰沙": { basePrice: 50 },
        "奇異果冰沙": { basePrice: 60 },
        "紅龍果冰沙": { basePrice: 60 },
        "西瓜冰沙": { basePrice: 60 },
        "鳳梨冰沙": { basePrice: 60 },
        "芒果冰沙": { basePrice: 70 }
    },
    "挫冰系列": {
        "黑砂糖剉冰": { basePrice: 55 },
        "牛奶剉冰": { basePrice: 55 },
        "水果牛奶剉冰": { basePrice: 65 }
    },
    "水果切盤": { "水果切盤": { basePrice: 50 },
                "甘草芭樂": { basePrice: 50 },
    },
    "季節限定！": { "燒仙草": { basePrice: 55 } },
    "厚片系列": {
        "厚片吐司": { basePrice: 25 },
        "鮪魚焗烤": { basePrice: 45 },
        "焦糖雲朵": { basePrice: 35 },
        "火腿起司": { basePrice: 40 },
        "玉米起司": { basePrice: 40 },
        "招牌水果雲朵": { basePrice: 35 },
       
    },
    "鬆餅系列": {
        "現烤鬆餅": { basePrice: 55 },
        "鮮奶油鬆餅": { basePrice: 55 },
        "招牌水果鬆餅": { basePrice: 55 },
        "玉米鮪魚起司": { basePrice: 70 },
        "火腿鮪魚起司": { basePrice: 70 },
        "水果冰淇淋鬆餅": { basePrice: 75 }
    },
    "盒酥系列": {
        "熱壓吐司A加B": { basePrice: 35 },
        "火腿起司": { basePrice: 40 },
        "玉米起司": { basePrice: 40 },
        "鮪魚焗烤": { basePrice: 40 },
        "番茄肉醬": { basePrice: 40 },
        "豬肉咖喱": { basePrice: 40 },
        "玉米鮪魚起司": { basePrice: 50 },
        "火腿鮪魚起司": { basePrice: 50 }
    }
};

// 定義選項設定
const options = {
    sizes: [
        { name: "大杯", priceDiff: 10 },
        { name: "中杯", priceDiff: 0 },
        { name: "小杯", priceDiff: -5 }
    ],
    ice: ["熱", "溫", "去冰", "微冰", "少冰", "正常冰"],
    sweetness: Array.from({length: 10}, (_, i) => i + 1),
    toppings: [
        { name: "珍珠", price: 10 },
        { name: "寒天", price: 10 },
        { name: "椰果", price: 10 },
        { name: "愛玉", price: 10 },
        { name: "布丁", price: 10 },
        { name: "仙草", price: 10 },
        { name: "蜂蜜", price: 10 },
        { name: "蘆薈", price: 10 },
        { name: "雲朵", price: 10 }
    ],
    breadToppings: [
        { name: "椰子", price: 10 },
        { name: "蒜香", price: 10 },
        { name: "巧克力", price: 10 },
        { name: "奶酥", price: 10 }
    ],
    waffleToppings: [
        { name: "椰香", price: 10 },
        { name: "蒜香", price: 10 },
        { name: "巧克力", price: 10 },
        { name: "蜂蜜", price: 10 },
        { name: "焦糖", price: 10 },
        { name: "奶酥", price: 10 }
    ],
    toastToppings: [
        { name: "椰香", price: 10 },
        { name: "蒜香", price: 10 },
        { name: "花生", price: 10 },
        { name: "巧克力", price: 10 },
        { name: "奶酥", price: 10 },
        { name: "珍珠", price: 10 },
        { name: "椰果", price: 10 },
        { name: "仙草", price: 10 },
        { name: "布丁", price: 10 },
        { name: "寒天", price: 10 }
    ]
};

// 初始化頁面
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeEventListeners();
});

// 初始化菜單
function initializeMenu() {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = ''; // 清空容器
    
    for (let series in menuStructure) {
        // 創建系列容器
        const seriesDiv = document.createElement('div');
        seriesDiv.className = 'series-wrapper';
        
        // 創建系列標題
        const seriesTitle = document.createElement('div');
        seriesTitle.className = 'series-title collapsed';
        seriesTitle.textContent = series;
        seriesTitle.onclick = () => toggleSeries(seriesTitle);
        
        // 創建飲品容器
        const seriesContainer = document.createElement('div');
        seriesContainer.className = 'series-container collapsed';
        
        // 添加該系列的所有飲品
        for (let drink in menuStructure[series]) {
            const drinkElement = document.createElement('div');
            drinkElement.className = 'menu-item';
            
            // 如果是買一送一系列，添加特殊樣式和文字
            if (series === "買一送一") {
                drinkElement.className += ' buy-one-get-one';
                drinkElement.innerHTML = `
                    <h3>${drink}</h3>
                    <p>點擊查看</p>
                `;
            } else {
                drinkElement.innerHTML = `
                    <h3>${drink}</h3>
                    <p>${menuStructure[series][drink].basePrice}元起</p>
                `;
            }
            
            drinkElement.onclick = (e) => {
                e.stopPropagation();
                openModal(series, drink);
            };
            seriesContainer.appendChild(drinkElement);
        }
        
        seriesDiv.appendChild(seriesTitle);
        seriesDiv.appendChild(seriesContainer);
        menuContainer.appendChild(seriesDiv);
    }
}

// 添加切換系列展開/收合的函數
function toggleSeries(titleElement) {
    const container = titleElement.nextElementSibling;
    titleElement.classList.toggle('collapsed');
    container.classList.toggle('collapsed');
}

// 打開彈窗
function openModal(series, drink) {
    if (series === "買一送一" && drink === "本日買一送一") {
        window.open('https://www.instagram.com/chiguocha?igsh=MWFseWd6cDZ2cWp4NQ==', '_blank');
        return;
    }
    
    const modal = document.getElementById('drinkModal');
    const title = document.getElementById('drinkTitle');
    title.textContent = `${series} - ${drink}`;
    
    // 如果是特價茶飲，修改價格顯示
    if (series === "買一送一" && drink === "購買") {
        document.getElementById('modalPrice').textContent = '時價';
    }
    
    // 擴展非飲品系列的判斷
    const nonBeverageSeries = [
        "挫冰系列",
        "水果切盤",
        "季節限定！"
    ];
    
    const isNonBeverageSeries = nonBeverageSeries.includes(series);
    const isBreadSeries = series === "厚片系列";
    const isWaffleSeries = series === "鬆餅系列";
    const isBoxSeries = series === "盒酥系列";
    const isToast = drink === "厚片吐司";
    const isPlainWaffle = drink === "現烤鬆餅";
    const isPressedToast = drink === "熱壓吐司A加B";
    
    // 獲取所有選項標籤
    const optionsContainer = document.querySelector('.options');
    const labels = optionsContainer.getElementsByTagName('label');
    
    // 遍歷所有選項，根據系列決定是否顯示
    Array.from(labels).forEach(label => {
        const labelText = label.textContent.trim();
        
        // 先將所有選項顯示
        label.style.display = '';
        
        // 如果是非飲料系列，則隱藏相關選項
        if (isNonBeverageSeries || isBreadSeries || isWaffleSeries || isBoxSeries) {
            if (labelText.includes('杯型') || 
                labelText.includes('冰塊') || 
                labelText.includes('甜度') || 
                labelText.includes('環保杯')) {
                label.style.display = 'none';
            }
        }
        
        // 處理加料選項
        if (labelText.includes('加料')) {
            if (isNonBeverageSeries) {
                // 挫冰系列、水果切盤、季節限定不顯示加料
                label.style.display = 'none';
            } else if (isBreadSeries && isToast) {
                label.innerHTML = `加料：${options.breadToppings.map(topping => `
                    <label style="display: inline-block; margin-right: 10px;">
                        <input type="checkbox" value="${topping.name}">
                        <span>${topping.name}</span>
                    </label>
                `).join('')}`;
            } else if (isWaffleSeries && isPlainWaffle) {
                label.innerHTML = `加料：${options.waffleToppings.map(topping => `
                    <label style="display: inline-block; margin-right: 10px;">
                        <input type="checkbox" value="${topping.name}">
                        <span>${topping.name}</span>
                    </label>
                `).join('')}`;
            } else if (isBoxSeries && isPressedToast) {
                label.innerHTML = `加料：${options.toastToppings.map(topping => `
                    <label style="display: inline-block; margin-right: 10px;">
                        <input type="checkbox" value="${topping.name}">
                        <span>${topping.name}</span>
                    </label>
                `).join('')}`;
            } else if (!isNonBeverageSeries && !isBreadSeries && !isWaffleSeries && !isBoxSeries) {
                label.innerHTML = `加料：${options.toppings.map(topping => `
                    <label style="display: inline-block; margin-right: 10px;">
                        <input type="checkbox" value="${topping.name}">
                        <span>${topping.name}</span>
                    </label>
                `).join('')}`;
            } else {
                label.style.display = 'none';
            }
        }
    });

    modal.style.display = 'block';
    updateModalPrice(series, drink);
}

// 更新彈窗中的價格
function updateModalPrice(series, drink) {
    const basePrice = menuStructure[series][drink].basePrice;
    const size = document.getElementById('sizeSelect').value;
    const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .filter(cb => cb.value !== 'ecoCup');
    const useEcoCup = document.getElementById('ecoCup').checked;
    
    let finalPrice = calculatePrice(series, drink, size, toppings, useEcoCup);
    document.getElementById('modalPrice').textContent = `${finalPrice}元`;
}

// 初始化事件監聽器
function initializeEventListeners() {
    document.getElementById('search').addEventListener('input', handleSearch);
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('addToCart').addEventListener('click', addToCart);
    document.getElementById('checkoutBtn').addEventListener('click', checkout);

    // 監聽所有會影響價格的選項變化
    document.querySelectorAll('input[name="size"]').forEach(input => {
        input.addEventListener('change', () => {
            const [series, drink] = document.getElementById('drinkTitle').textContent.split(' - ');
            updateModalPrice(series, drink);
        });
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.addEventListener('change', () => {
            const [series, drink] = document.getElementById('drinkTitle').textContent.split(' - ');
            updateModalPrice(series, drink);
        });
    });

    // 修改杯型監聽器
    document.getElementById('sizeSelect').addEventListener('change', () => {
        const [series, drink] = document.getElementById('drinkTitle').textContent.split(' - ');
        updateModalPrice(series, drink);
    });
}

// 搜尋功能
function handleSearch(event) {
    const searchText = event.target.value.toLowerCase();
    const seriesWrappers = document.getElementsByClassName('series-wrapper');
    
    Array.from(seriesWrappers).forEach(wrapper => {
        const seriesTitle = wrapper.querySelector('.series-title');
        const menuItems = wrapper.getElementsByClassName('menu-item');
        let hasMatch = false;
        
        Array.from(menuItems).forEach(item => {
            const drinkName = item.getElementsByTagName('h3')[0].textContent.toLowerCase();
            const isMatch = drinkName.includes(searchText);
            item.style.display = isMatch ? '' : 'none';
            if (isMatch) hasMatch = true;
        });
        
        // 如果該系列有匹配的飲品，顯示系列並展開
        wrapper.style.display = hasMatch ? '' : 'none';
        if (hasMatch && searchText) {
            seriesTitle.classList.remove('collapsed');
            wrapper.querySelector('.series-container').classList.remove('collapsed');
        } else if (!searchText) {
            seriesTitle.classList.add('collapsed');
            wrapper.querySelector('.series-container').classList.add('collapsed');
        }
    });
}

// 關閉彈窗
function closeModal() {
    document.getElementById('drinkModal').style.display = 'none';
}

// 加入購物車
function addToCart() {
    const fullTitle = document.getElementById('drinkTitle').textContent;
    const [series, drink] = fullTitle.split(' - ');
    
    let cartItemText = drink;
    let price;
    
    // 判斷是否為特價茶飲
    const isSpecialPrice = series === "買一送一" && drink === "購買";
    
    if (isSpecialPrice) {
        // 特價茶飲的處理
        const size = document.getElementById('sizeSelect').value;
        const ice = document.querySelector('input[name="ice"]:checked').value;
        const sweetness = document.getElementById('sweetness').value;
        const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(cb => cb.parentNode.textContent.trim())
            .filter(text => !text.includes('環保杯'));
        const useEcoCup = document.getElementById('ecoCup').checked;
        
        cartItemText += ` (${size})`;
        cartItemText += ` - ${ice}`;
        cartItemText += ` - ${sweetness}分甜`;
        
        if (toppings.length > 0) {
            cartItemText += ` - 加料: ${toppings.join(', ')}`;
        }
        if (useEcoCup) {
            cartItemText += ' (環保杯)';
        }
        
        price = "時價";
    } else {
        // 判斷是否為特殊系列（需要顯示加料的非飲料系列）
        const isSpecialSeries = (series === "厚片系列" && drink === "厚片吐司") ||
                               (series === "鬆餅系列" && drink === "現烤鬆餅") ||
                               (series === "盒酥系列" && drink === "熱壓吐司A加B");
                               
        // 判斷是否為完全不需選項的非飲料系列
        const isSimpleSeries = ["挫冰系列", "水果切盤", "季節限定！"].includes(series);
        
        if (isSimpleSeries) {
            // 完全不需選項的非飲料系列
            price = menuStructure[series][drink].basePrice;
        } else if (isSpecialSeries) {
            // 需要加料的非飲料系列
            const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                .map(cb => cb.parentNode.textContent.trim())
                .filter(text => !text.includes('環保杯'));
                if (toppings.length > 0) {
                    cartItemText += ` - 加料: ${toppings.join(', ')}`;
            }
            price = calculatePrice(series, drink, null, toppings, false);
        } else {
            // 飲料系列
            const size = document.getElementById('sizeSelect').value;
            const ice = document.querySelector('input[name="ice"]:checked').value;
            const sweetness = document.getElementById('sweetness').value;
            const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                .map(cb => cb.parentNode.textContent.trim())
                .filter(text => !text.includes('環保杯'));
            const useEcoCup = document.getElementById('ecoCup').checked;
            
            cartItemText += ` (${size})`;
            cartItemText += ` - ${ice}`;
            cartItemText += ` - ${sweetness}分甜`;
            
            if (toppings.length > 0) {
                cartItemText += ` - 加料: ${toppings.join(', ')}`;
            }
            if (useEcoCup) {
                cartItemText += ' (環保杯)';
            }
            
            price = calculatePrice(series, drink, size, toppings, useEcoCup);
        }
    }
    
    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    if (isSpecialPrice) {
        cartItem.className += ' special-price';
    }
    cartItem.innerHTML = `
        ${cartItemText} - ${price}${typeof price === 'number' ? '元' : ''}
        <span class="delete-btn">×</span>
    `;
    
    cartItem.querySelector('.delete-btn').onclick = () => {
        cartItem.remove();
        updateTotalPrice();
    };
    
    document.getElementById('cartList').appendChild(cartItem);
    updateTotalPrice();
    closeModal();
}

// 計算價格
function calculatePrice(series, drink, size, toppings, useEcoCup) {
    let price = menuStructure[series][drink].basePrice;
    
    // 判斷是否為飲料系列
    const isNonBeverageSeries = ["厚片系列", "鬆餅系列", "盒酥系列", "挫冰系列", "水果切盤", "季節限定！"].includes(series);
    
    // 只有飲料系列才計算杯型和環保杯折扣
    if (!isNonBeverageSeries) {
        // 杯型價格調整
        switch(size) {
            case '胖杯':
                price += 10;  // 胖杯加10元
                break;
            case '大杯':
                // 大杯維持基本價格
                break;
            case '中杯':
                price -= 5;  // 中杯減5元
                break;
        }
        
        // 環保杯折扣
        if (useEcoCup) price -= 10;
    
        // 加料價格
        price += toppings.length * 10;
    } else if ((series === "厚片系列" && drink === "厚片吐司") ||
        (series === "鬆餅系列" && drink === "現烤鬆餅") ||
        (series === "盒酥系列" && drink === "熱壓吐司A加B")) {
        // 這些品項使用各自的加料價格
        price += toppings.length * 10;
    }
    
    return Math.round(price);
}

// 更新總價
function updateTotalPrice() {
    const cartItems = document.getElementsByClassName('cart-item');
    let total = Array.from(cartItems)
        .filter(item => !item.classList.contains('special-price'))  // 排除特價品項
        .reduce((sum, item) => {
            const price = parseInt(item.textContent.match(/(\d+)元/)[1]);
            return sum + price;
        }, 0);
    
    // 九折優惠，無條件捨去
    total = Math.floor(total * 0.9);
    document.getElementById('totalPrice').textContent = total;
}

// 結帳
function checkout() {
    const note = document.getElementById('note').value;
    
    // 分別獲取一般訂單和特價訂單
    const regularItems = Array.from(document.getElementsByClassName('cart-item'))
        .filter(item => !item.classList.contains('special-price'))
        .map(item => item.textContent.replace('×', '').trim());
    
    const specialItems = Array.from(document.getElementsByClassName('cart-item'))
        .filter(item => item.classList.contains('special-price'))
        .map(item => item.textContent.replace('×', '').trim());
    
    const total = document.getElementById('totalPrice').textContent;
    
    let orderContent = `備註：${note}\n訂單內容：\n`;
    
    // 先加入一般訂單
    if (regularItems.length > 0) {
        orderContent += regularItems.join('\n');
        orderContent += `\n總計：${total}元（已打九折）\n`;
    }
    
    // 再加入特價訂單
    if (specialItems.length > 0) {
        orderContent += '\n買一送一訂單：\n';
        orderContent += specialItems.join('\n');
    }
    
    orderContent = orderContent.trim();
    
    // 複製到剪貼簿
    navigator.clipboard.writeText(orderContent)
        .then(() => {
            alert('訂單已複製到剪貼簿！即將為您打開喫果茶官方賬戶，請傳給我們喔～');
            window.location.href = 'https://line.me/R/ti/p/@737zcrpz';
        })
        .catch(err => {
            console.error('複製失敗：', err);
        });
} 
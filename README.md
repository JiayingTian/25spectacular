# 中国旅游景点推荐网站项目说明文档

## 团队成员介绍

- 田佳瑛：项目负责人，前端开发，负责网站的设计与整体布局，提供素材，编写markdown文件。
- 李晨曦：负责ui、页面美化、主页制作，实现网页整体框架构建，保障网页风格统一且自然。
- 叶宇灿：前端开发，负责实现景点详情页、随机推荐页、高分景点页、住宿指南、最佳时间指南、交通指南页面。
- 詹康瑞：前端开发，后端开发，负责用户评价功能的实现，包括用户登录注册、评价提交和个人中心页面。

## 🚀 使用说明

1. **访问网站**：打开index1.html即可进入首页
2. **搜索景点**：在顶部搜索框输入景点名称、地名或省份
3. **查看详情**：点击景点卡片或搜索结果进入详情页
4. **提交评价**：点击导航栏的"分享体验"按钮，选择星级评分(1-5星)并填写内容
5. **浏览推荐**：点击导航栏的"随机推荐"查看随机景点
6. **查看热门**：点击导航栏的"高分景点"查看高评分景点
7. **参考指南**：查看住宿、最佳时间和交通指南页面获取更多旅行信息

## 📁 项目文件结构

```
├── index1.html             # 起始页
├── index.html              # 首页
├── spot-detail.html        # 景点详情页
├── random-spots.html       # 随机推荐页
├── top-rated.html          # 高分景点页
├── guide-accommodation.html # 住宿指南
├── guide-time.html         # 最佳时间指南
├── guide-transport.html    # 交通指南
├── 1.css                   # 首页样式
├── style.css               # 其他页面样式
├── style (1).css           # 备用样式文件
├── script.js               # 主要JavaScript文件
├── script (1).js           # 备用JavaScript文件
├── images/                 # 图片资源目录
│   ├── changcheng.jpg      # 长城图片
│   ├── xihu.jpg            # 西湖图片
│   ├── xihu1.jpg           # 西湖备用图片
│   └── ...                 # 其他景点图片
├── README.md               # 项目说明文档
└── extracted_content.json  # 提取的内容数据
```

## 📋 产品介绍

### 项目概述
这是一个专注于中国著名旅游景点推荐的响应式网站项目，为用户提供景点搜索、详情展示和评价分享功能。网站以绿色(#2c5530)为主色调，采用现代化设计风格，支持多设备访问，旨在为用户提供便捷的旅游信息查询和分享体验。

### 核心功能模块

#### 🔍 智能搜索系统
- 支持景点名称、地名、省份三级搜索
- **搜索逻辑**：
  - 景点搜索 → 直接跳转详情页
  - 地名/省份搜索 → 跳转推荐页并置顶相关景点
- 支持键盘回车和按钮点击两种触发方式

#### 🏞️ 景点数据管理
- **景点列表**：西湖、丽江古城、张家界、长城、香格里拉、洱海、九寨沟、桂林山水等8个中国著名景点
- **数据结构**：每个景点包含完整信息：ID、名称、所属省份、图片链接、评分、详情页链接
- **详情信息**：景点详情页展示详细信息：描述、地址、开放时间、门票、交通方式
- **本地图片资源**：部分景点图片已替换为本地图片（如：changcheng.jpg、xihu.jpg），提高加载速度和稳定性

#### ⭐ 用户评价系统
- **星级评分功能（1-5星）**：支持用户对景点进行1-5星评分
- 评价内容提交与本地存储
- 评价框展开/收起交互效果
- 已提交评价实时显示在景点详情页

#### 📱 导航与交互
- **粘性导航栏**：滚动时始终可见，包含搜索框和导航链接
- **导航结构**：首页、随机推荐、高分景点、联系我们
- **搜索功能**：在导航栏集成，支持搜索景点、地名或省份
- **评价入口**：导航栏提供"分享体验"按钮，可随时提交评价
- **平滑滚动**：页面内链接使用平滑滚动定位效果
- **响应式布局**：适配桌面、平板和手机等多种设备
- **视觉效果**：首页使用视频背景和3D动画，提升用户体验

#### 📖 旅游指南页面
- **住宿指南** (guide-accommodation.html)：提供各景点周边住宿推荐和注意事项
- **最佳时间** (guide-time.html)：介绍各景点的最佳游览时间和季节特点
- **交通指南** (guide-transport.html)：提供到达各景点的交通方式和出行建议

## 💻 技术实现

### 前端技术栈
- **HTML5 + CSS3 + JavaScript**：核心开发技术
- **Font Awesome 6.4.0**：图标库
- **Three.js r128**：3D图形库（用于首页视觉效果）
- **GSAP 3.12.5**：动画库（包含ScrollTrigger）
- **imagesLoaded**：图片加载管理库
- **Google Fonts**：Noto Sans SC字体
- **响应式设计**：Mobile-first approach

### 主要CSS文件
- `1.css`：首页样式，包含视频背景、动画效果等
- `style.css`：其他页面通用样式，包含导航、卡片、表单等

### 主要JavaScript文件
- `script.js`：主要功能实现，包括搜索、评价系统等
- `script (1).js`：备用功能实现文件

### HTML5结构
- 语义化标签使用（nav, section, article等）
- 视频背景封面设计
- 多页面架构（首页、详情页、推荐页、指南页）

### CSS3样式特性
```css
/* 响应式设计断点 */
@media (max-width: 992px) { /* 平板设备 */ }
@media (max-width: 768px) { /* 小屏平板 */ }
@media (max-width: 576px) { /* 移动设备 */ }

/* 动画效果 */
transition: all 0.3s ease;
transform: translateY(-8px);
scroll-behavior: smooth;
```

### JavaScript核心功能实现

#### 1. 搜索算法实现
```javascript
// 关键词匹配逻辑 - 不区分大小写
const results = searchableItems.filter(item => 
    item.name.toLowerCase().includes(keyword)
);

// 搜索结果处理逻辑
if (firstResult.type === "景点") {
    // 直接跳转到景点详情页
} else if (firstResult.type === "地名" || firstResult.type === "省份") {
    // 保存关联景点ID到localStorage
    localStorage.setItem('topSpotIds', JSON.stringify(firstResult.relatedSpotIds));
    // 跳转到推荐页并置顶相关景点
}
```

#### 2. 星级评分功能实现
```javascript
// 星级评分交互逻辑
const stars = starRating.querySelectorAll('.fa-star');
stars.forEach(star => {
    // 鼠标悬停效果
    star.addEventListener('mouseover', function() {
        const score = this.getAttribute('data-score');
        highlightStars(score);
    });
    // 鼠标移开效果
    star.addEventListener('mouseout', function() {
        const currentScore = reviewScore.value || 0;
        highlightStars(currentScore);
    });
    // 点击评分
    star.addEventListener('click', function() {
        const score = this.getAttribute('data-score');
        reviewScore.value = score;
        highlightStars(score);
    });
});

// 星级高亮函数
function highlightStars(score) {
    stars.forEach(star => {
        const starScore = star.getAttribute('data-score');
        if (starScore <= score) {
            star.style.color = '#ffc107';
            star.style.transform = 'scale(1.1)';
        } else {
            star.style.color = '#ddd';
            star.style.transform = 'scale(1)';
        }
    });
}
```

#### 3. 评价提交与存储
```javascript
// 评价表单提交处理
reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // 获取评价数据
    const review = {
        id: Date.now(),           // 生成唯一ID
        spotName: spotName,       // 景点名称
        score: score,             // 评分(1-5)
        content: content,         // 评价内容
        date: new Date().toLocaleDateString() // 提交日期
    };
    
    // 本地存储
    const existingReviews = JSON.parse(localStorage.getItem('spotReviews')) || [];
    existingReviews.push(review);
    localStorage.setItem('spotReviews', JSON.stringify(existingReviews));
    
    // 重置表单并提供反馈
    alert('评价提交成功！感谢你的分享～');
    this.reset();
});
```

#### 4. 数据存储结构
- 搜索项分类：景点、地名、省份
- 景点完整数据对象
- 评价数据使用localStorage本地存储

#### 5. 事件处理机制
- **页面加载**：DOMContentLoaded监听，确保DOM加载完成后执行脚本
- **用户交互**：click、keydown、scroll、mouseover等事件绑定
- **表单验证**：评价表单的必填项和评分验证
- **滚动监听**：用于实现滚动动画和导航高亮效果

## 🎯 特色技术实现

### 智能搜索关联
- 省份搜索 → 显示该省所有景点
- 地名搜索 → 显示该地关联景点
- 数据关联通过ID映射实现

### 响应式设计策略
- 断点设置：992px、768px、576px
- 网格布局适配不同屏幕尺寸
- 弹性盒模型运用，确保内容合理排布

### 用户体验优化
- 滚动监听与导航高亮
- 平滑滚动动画
- 悬停效果反馈
- 触摸设备兼容
- 评价框交互优化（展开/收起动画）

## 📊 数据结构设计

### 搜索项数据结构
```javascript
{
    name: "西湖",           // 显示名称
    type: "景点",           // 类型分类
    spotId: 1,              // 景点ID（仅景点类型）
    province: "浙江",       // 所属省份
    relatedSpotIds: [1]     // 关联景点ID（地名/省份类型）
}
```

### 景点详情数据结构
```javascript
{
    id: 1,                                // 唯一标识
    name: "西湖",                          // 景点名称
    province: "浙江",                      // 所在省份
    img: "./images/xihu.jpg",              // 本地图片资源
    rating: 4.8,                          // 用户评分
    description: "西湖位于浙江省杭州市中心...",  // 详细描述
    address: "浙江省杭州市西湖区龙井路1号",    // 地址
    time: "全天开放（部分景点7:00-18:00）",    // 开放时间
    ticket: "免费（部分景点单独收费）",        // 门票信息
    popularity: "AAAAA级景区，春秋最佳"        // 人气信息
}
```

### 评价数据结构
```javascript
{
    id: 1623456789012,      // 唯一ID（时间戳）
    spotName: "西湖",       // 景点名称
    score: 5,               // 评分(1-5)
    content: "西湖真的很美...", // 评价内容
    date: "2024-01-15"      // 提交日期
}
```

## 🔧 技术亮点

1. **模块化代码组织**
   - 功能模块清晰分离
   - 可维护性强
   - 易于扩展

2. **本地数据持久化**
   - 评价数据本地存储，无需后端支持
   - 搜索状态保持
   - 用户行为记录

3. **跨平台兼容性**
   - 现代浏览器支持
   - 移动端优化
   - 触摸交互适配

4. **星级评分系统**
   详细实现说明请参见[星级评分功能详细实现指南](#-星级评分功能详细实现指南)部分。

## ⭐ 星级评分功能详细实现指南

### HTML结构设计
```html
<!-- 星级评分控件HTML结构 -->
<div class="form-group">
    <label>评分 <span class="required">*</span></label>
    <div id="star-rating" class="star-rating">
        <i class="fas fa-star" data-score="1"></i>
        <i class="fas fa-star" data-score="2"></i>
        <i class="fas fa-star" data-score="3"></i>
        <i class="fas fa-star" data-score="4"></i>
        <i class="fas fa-star" data-score="5"></i>
    </div>
    <input type="hidden" id="review-score" value="0">
</div>
```

### CSS样式设计
```css
/* 星级评分样式 */
.star-rating {
    display: flex;
    gap: 8px;
    font-size: 1.5rem;
    cursor: pointer;
}

/* 星星默认样式 */
.star-rating .fa-star {
    color: #ddd;      /* 默认灰色 */
    transition: all 0.2s ease;
}

/* 星星悬停效果 */
.star-rating .fa-star:hover {
    transform: scale(1.2);  /* 悬停时放大 */
}

/* 已评分星星样式在JS中动态设置 */
.star-rating .fa-star.rated {
    color: #ffc107;   /* 评分后黄色 */
}
```

### 交互逻辑实现
```javascript
// 星级评分核心交互逻辑
const starRating = document.getElementById('star-rating');
const reviewScore = document.getElementById('review-score');

if (starRating && reviewScore) {
    const stars = starRating.querySelectorAll('.fa-star');
    
    // 为每个星星添加事件监听
    stars.forEach(star => {
        // 鼠标悬停时预览评分效果
        star.addEventListener('mouseover', function() {
            const score = this.getAttribute('data-score');
            highlightStars(score);
        });
        
        // 鼠标移开时恢复当前评分状态
        star.addEventListener('mouseout', function() {
            const currentScore = reviewScore.value || 0;
            highlightStars(currentScore);
        });
        
        // 点击时确认评分
        star.addEventListener('click', function() {
            const score = this.getAttribute('data-score');
            reviewScore.value = score;
            highlightStars(score);
        });
    });
    
    // 星星高亮函数 - 核心视觉反馈实现
    function highlightStars(score) {
        stars.forEach(star => {
            const starScore = star.getAttribute('data-score');
            if (starScore <= score) {
                star.style.color = '#ffc107';  // 激活星星为黄色
                star.style.transform = 'scale(1.1)';  // 轻微放大效果
            } else {
                star.style.color = '#ddd';  // 未激活星星为灰色
                star.style.transform = 'scale(1)';  // 恢复原始大小
            }
        });
    }
}
```

### 评分数据提交与存储
```javascript
// 评价表单提交时包含评分数据
reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取评分值
    const score = reviewScore.value;
    
    // 验证评分是否已选择
    if (score < 1) {
        alert('请给景点评分');
        return;
    }
    
    // 构建评价对象，包含评分数据
    const review = {
        id: Date.now(),           // 时间戳作为唯一ID
        spotName: spotName,       // 景点名称
        score: score,             // 评分值(1-5)
        content: content,         // 评价内容
        date: new Date().toLocaleDateString() // 提交日期
    };
    
    // 存储到localStorage
    const existingReviews = JSON.parse(localStorage.getItem('spotReviews')) || [];
    existingReviews.push(review);
    localStorage.setItem('spotReviews', JSON.stringify(existingReviews));
    
    // 成功提示
    alert('评价提交成功！感谢你的分享～');
});
```

### 已提交评分的展示
```javascript
// 在景点详情页展示用户评价和评分
function displayReviews() {
    const existingReviews = JSON.parse(localStorage.getItem('spotReviews')) || [];
    const spotReviews = existingReviews.filter(review => review.spotName === currentSpotName);
    
    if (spotReviews.length > 0) {
        spotReviews.forEach(review => {
            // 创建评分星星的HTML
            const starsHtml = '<i class="fas fa-star"></i>'.repeat(review.score) + 
                             '<i class="fas fa-star" style="color: #ddd;"></i>'.repeat(5 - review.score);
            
            // 构建评价项HTML
            const reviewItem = `
                <div class="review-item">
                    <div class="review-header">
                        <span class="review-spot-name">${review.spotName}</span>
                        <span class="review-date">${review.date}</span>
                    </div>
                    <div class="review-rating">
                        ${starsHtml}
                    </div>
                    <div class="review-content">${review.content}</div>
                </div>
            `;
            
            // 添加到DOM
            reviewsContainer.innerHTML += reviewItem;
        });
    }
}
```

### 用户体验优化设计
1. **视觉反馈**：星星在悬停和选中时有明确的颜色变化和动画效果
2. **交互便捷**：支持点击任意星星选择对应的评分等级
3. **状态保持**：鼠标移开后保持当前选中的评分状态
4. **表单验证**：确保用户提交前已选择评分
5. **实时展示**：提交后立即在页面上显示用户的评分和评价

### 响应式适配
星级评分系统在不同屏幕尺寸下都能保持良好的用户体验：
- 桌面端：提供更大的星星图标和更明显的交互效果
- 移动端：优化触摸交互，确保在小屏幕上也能轻松点击选择评分


## 📱 浏览器支持

- **桌面浏览器**
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+
- **移动浏览器**
  - Safari iOS 14+
  - Chrome Android 90+
  - 其他现代移动浏览器

## 🎨 设计特点

- **主色调**：绿色 (#2c5530) - 象征自然、生态、环保
- **辅助色**：白色、浅灰色 - 确保内容清晰可读
- **强调色**：黄色 (#ffc107) - 用于星级评分和高亮元素
- **排版**：使用Noto Sans SC、Microsoft YaHei字体，确保中文显示美观
- **图标**：使用Font Awesome 6.4.0图标库，提升视觉一致性
- **动画效果**：使用GSAP实现平滑动画和滚动效果
- **3D效果**：首页使用Three.js实现3D视觉效果
- **本地资源**：部分景点图片已替换为本地资源，提高加载速度

## 📝 项目变更记录

### 近期更新
1. **图片资源本地化**：将西湖、长城等景点图片从Unsplash CDN替换为本地图片资源
   - 西湖：`./images/xihu.jpg`
   - 长城：`./images/changcheng.jpg`
   - 提高了图片加载速度和稳定性

2. **代码优化**：
   - 统一了景点数据结构
   - 优化了评价系统的用户体验
   - 增强了响应式设计的兼容性

## 🗂️ 数据文件说明

### extracted_content.json
- **用途**：用于存储项目中的景点描述文本和图片资源路径
- **格式**：JSON数组格式，包含两种类型的条目：
  - `text`类型：包含景点的描述文本
  - `image`类型：包含图片资源的相对路径
- **内容**：包含黄山、敦煌莫高窟、布达拉宫等多个景点的描述和对应的图片资源
- **特点**：可作为项目的内容资源库，便于统一管理和更新景点信息

## 🚀 项目运行说明

### 环境要求
- 现代Web浏览器（Chrome 90+、Firefox 88+、Safari 14+、Edge 90+）
- 无需服务器环境，可直接本地运行

### 运行方式
1. 下载或克隆项目文件
2. 直接在浏览器中打开 `index1.html` 文件
3. 或使用本地服务器运行项目（推荐）：
   ```bash
   # 使用Python内置服务器
   python -m http.server 8000
   # 或使用Node.js的http-server
   npx http-server -p 8000
   ```

## 🌟 总结

这个项目展示了现代Web开发的最佳实践，结合了美观的UI设计和强大的功能实现，为用户提供了优质的旅游信息查询体验。通过纯前端技术实现了完整的景点推荐、搜索和评价系统，特别在星级评分功能上实现了直观的用户交互和动态视觉反馈。

### 项目亮点
1. **多页面架构**：包含首页、详情页、推荐页、指南页等完整页面体系
2. **丰富的视觉效果**：结合视频背景、3D动画和平滑过渡效果
3. **完整的功能模块**：搜索、评价、推荐、详情展示等功能一应俱全
4. **响应式设计**：完美适配各种屏幕尺寸
5. **本地资源优化**：部分图片资源本地化，提高加载速度

项目适合作为旅游类网站的基础框架，可以进一步扩展和优化以满足更复杂的业务需求，如添加用户登录系统、在线预订功能、地图集成等。
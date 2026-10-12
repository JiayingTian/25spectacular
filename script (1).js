// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 核心搜索逻辑：支持景点名、地名、省份搜索，省份/地名置顶对应景点
    const searchInput = document.getElementById('main-search-input');
    const searchBtn = document.getElementById('main-search-btn');
    // 搜索数据（新增省份字段，关联景点ID）
    const searchableItems = [
        // 景点（含省份）
        { name: "西湖", type: "景点", spotId: 1, province: "浙江" },
        { name: "丽江古城", type: "景点", spotId: 2, province: "云南" },
        { name: "张家界", type: "景点", spotId: 3, province: "湖南" },
        { name: "长城", type: "景点", spotId: 4, province: "北京" },
        { name: "香格里拉", type: "景点", spotId: 5, province: "云南" },
        { name: "洱海", type: "景点", spotId: 6, province: "云南" },
        { name: "九寨沟", type: "景点", spotId: 7, province: "四川" },
        { name: "桂林山水", type: "景点", spotId: 8, province: "广西" },
        // 地名（关联省份+景点ID）
        { name: "杭州", type: "地名", province: "浙江", relatedSpotIds: [1] },
        { name: "丽江", type: "地名", province: "云南", relatedSpotIds: [2] },
        { name: "张家界市", type: "地名", province: "湖南", relatedSpotIds: [3] },
        { name: "北京", type: "地名", province: "北京", relatedSpotIds: [4] },
        { name: "香格里拉市", type: "地名", province: "云南", relatedSpotIds: [5] },
        { name: "大理", type: "地名", province: "云南", relatedSpotIds: [6] },
        { name: "阿坝", type: "地名", province: "四川", relatedSpotIds: [7] },
        { name: "桂林", type: "地名", province: "广西", relatedSpotIds: [8] },
        // 省份（关联该省所有景点ID）
        { name: "浙江", type: "省份", relatedSpotIds: [1] },
        { name: "云南", type: "省份", relatedSpotIds: [2, 5, 6] },
        { name: "湖南", type: "省份", relatedSpotIds: [3] },
        { name: "北京", type: "省份", relatedSpotIds: [4] },
        { name: "四川", type: "省份", relatedSpotIds: [7] },
        { name: "广西", type: "省份", relatedSpotIds: [8] }
    ];
    // 所有景点完整数据（新增省份字段）
    const allSpots = [
        { id: 1, name: "西湖", province: "浙江", img: "./images/xihu.jpg", rating: 4.8, detailLink: "spot-detail.html?id=1" },
        { id: 2, name: "丽江古城", province: "云南", img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1", rating: 4.7, detailLink: "spot-detail.html?id=2" },
        { id: 3, name: "张家界", province: "湖南", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", rating: 4.9, detailLink: "spot-detail.html?id=3" },
        { id: 4, name: "长城", province: "北京", img: "./images/changcheng.jpg", rating: 4.6, detailLink: "spot-detail.html?id=4" },
        { id: 5, name: "香格里拉", province: "云南", img: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd", rating: 4.8, detailLink: "spot-detail.html?id=5" },
        { id: 6, name: "洱海", province: "云南", img: "https://images.unsplash.com/photo-1464278533981-50106e6176b1", rating: 4.7, detailLink: "spot-detail.html?id=6" },
        { id: 7, name: "九寨沟", province: "四川", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", rating: 4.9, detailLink: "spot-detail.html?id=7" },
        { id: 8, name: "桂林山水", province: "广西", img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", rating: 4.8, detailLink: "spot-detail.html?id=8" }
    ];
    // 搜索处理函数
    function handleSearch() {
        if (!searchInput) return;
        const keyword = searchInput.value.trim().toLowerCase();
        if (!keyword) {
            alert("请输入搜索关键词");
            return;
        }
        // 匹配所有相关结果（不区分大小写）
        const results = searchableItems.filter(item => 
            item.name.toLowerCase().includes(keyword)
        );
        if (results.length > 0) {
            const firstResult = results[0];
            // 景点 → 直接跳转详情页
            if (firstResult.type === "景点" && firstResult.spotId) {
                const spotLink = `spot-detail.html?id=${firstResult.spotId}`;
                window.location.href = spotLink;
            }
            // 地名/省份 → 跳转推荐页，置顶关联景点
            else if ((firstResult.type === "地名" || firstResult.type === "省份") && firstResult.relatedSpotIds) {
                localStorage.setItem('topSpotIds', JSON.stringify(firstResult.relatedSpotIds));
                localStorage.setItem('searchKeyword', firstResult.name);
                localStorage.setItem('searchType', firstResult.type); // 记录搜索类型（地名/省份）
                window.location.href = 'random-spots.html';
            }
        } else {
            alert("未找到相关景点、地名或省份，请尝试其他关键词");
        }
    }
    // 绑定搜索事件
    if (searchBtn) searchBtn.addEventListener('click', handleSearch);
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
    // 2. 评价框展开/隐藏逻辑 - 确保点击按钮正常显示/隐藏
    const reviewToggleBtn = document.getElementById('review-toggle-btn');
    const reviewBoxContainer = document.getElementById('review-box-container');
    let isReviewBoxOpen = false; // 控制评价框状态
    
    // 确保元素存在再绑定事件（修复可能的元素未找到问题）
    if (reviewToggleBtn && reviewBoxContainer) {
        // 初始状态：评价框隐藏
        reviewBoxContainer.style.display = 'none';
        
        reviewToggleBtn.addEventListener('click', function() {
            isReviewBoxOpen = !isReviewBoxOpen;
            // 切换显示/隐藏
            reviewBoxContainer.style.display = isReviewBoxOpen ? 'block' : 'none';
            // 切换按钮图标
            reviewToggleBtn.classList.toggle('collapsed', !isReviewBoxOpen);
            
            // 显示时滚动到评价框位置
            if (isReviewBoxOpen) {
                setTimeout(() => {
                    reviewBoxContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    }
    // 3. 导航栏逻辑
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    if (navbar) {
        navbar.style.position = 'sticky';
        navbar.style.top = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '999';
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    // 4. 滚动事件 - 已删除评价框自动收回逻辑
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if ((link.getAttribute('href') === `#${current}`) || 
                (current === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
        // 【已删除】滚动时自动收回评价框的相关代码
    });
    // 5. 导航链接点击跳转
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    // 6. 探索按钮点击事件
    const exploreBtn = document.querySelector('.cover-section .explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const experienceSection = document.getElementById('experience');
            if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    // 7. 联系表单提交
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的留言！我们会尽快与您联系。');
            this.reset();
        });
    }
    // 8. 封面内容动画
    const coverContent = document.querySelector('.cover-content');
    if (coverContent) {
        setTimeout(() => {
            coverContent.style.opacity = '1';
            coverContent.style.transform = 'translateY(0)';
        }, 500);
        coverContent.style.opacity = '0';
        coverContent.style.transform = 'translateY(20px)';
        coverContent.style.transition = 'opacity 1s ease, transform 1s ease';
    }
    // 9. 评价框星级评分逻辑 - 确保星级正常交互
    const starRating = document.getElementById('star-rating');
    const reviewScore = document.getElementById('review-score');
    if (starRating && reviewScore) {
        const stars = starRating.querySelectorAll('.fa-star');
        stars.forEach(star => {
            star.addEventListener('mouseover', function() {
                const score = this.getAttribute('data-score');
                highlightStars(score);
            });
            star.addEventListener('mouseout', function() {
                const currentScore = reviewScore.value || 0;
                highlightStars(currentScore);
            });
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
    }
    // 10. 评价表单提交逻辑 - 确保评价正常提交
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const spotName = document.getElementById('review-spot').value.trim();
            const score = reviewScore.value;
            const content = document.getElementById('review-content').value.trim();
            
            // 简单验证
            if (!spotName) {
                alert('请选择评价的景点');
                return;
            }
            if (score < 1) {
                alert('请给景点评分');
                return;
            }
            if (!content) {
                alert('请输入评价内容');
                return;
            }
            
            // 保存评价到本地存储
            const review = {
                id: Date.now(),
                spotName: spotName,
                score: score,
                content: content,
                date: new Date().toLocaleDateString()
            };
            const existingReviews = JSON.parse(localStorage.getItem('spotReviews')) || [];
            existingReviews.push(review);
            localStorage.setItem('spotReviews', JSON.stringify(existingReviews));
            
            // 提交成功反馈
            alert('评价提交成功！感谢你的分享～');
            // 重置表单并隐藏评价框
            this.reset();
            reviewScore.value = '0';
            if (starRating) highlightStars(0);
            if (reviewBoxContainer) reviewBoxContainer.style.display = 'none';
            if (reviewToggleBtn) reviewToggleBtn.classList.remove('collapsed');
            isReviewBoxOpen = false;
            
            // 刷新评价列表（如果在详情页）
            if (window.location.pathname.includes('spot-detail.html')) {
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        });
    }
       // 11. 出行指南按钮跳转逻辑（终极修复版）
document.addEventListener('DOMContentLoaded', function() {
  // 步骤1：先定位出行指南的父容器（避免选中其他无关元素）
  const visitInfoContainer = document.querySelector('.visit-info');
  if (!visitInfoContainer) {
    console.log('错误：未找到出行指南模块的父容器（.visit-info）');
    return; // 若父容器不存在，终止执行并提示
  }

  // 步骤2：从父容器中精准筛选出3个按钮（避免选中其他.info-item）
  const guideButtons = visitInfoContainer.querySelectorAll('.info-item');
  if (guideButtons.length === 0) {
    console.log('错误：未在出行指南模块中找到按钮（.info-item）');
    return; // 若按钮不存在，终止执行并提示
  }

  // 步骤3：给每个按钮绑定点击事件（通过data-guide属性匹配页面）
  const guidePageMap = {
    time: 'guide-time.html',
    transport: 'guide-transport.html',
    accommodation: 'guide-accommodation.html'
  };

  guideButtons.forEach(button => {
    // 给按钮添加“鼠标指针”样式，直观提示“可点击”
    button.style.cursor = 'pointer';
    button.style.transition = 'transform 0.2s ease';
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.02)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });

    // 核心：点击跳转逻辑
    button.addEventListener('click', function() {
      const guideType = this.getAttribute('data-guide');
      const targetUrl = guidePageMap[guideType];
      
      if (targetUrl) {
        // 测试：点击时在控制台打印目标路径，确认是否匹配
        console.log('跳转路径：', targetUrl);
        // 实际跳转（若控制台有路径，说明逻辑正常，问题可能在文件路径）
        window.location.href = targetUrl;
      } else {
        console.log('错误：未匹配到目标页面（检查data-guide属性）');
      }
    });
  });
});
});
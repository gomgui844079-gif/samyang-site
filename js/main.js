// DOM이 모두 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', () => {

    // 1. ScrollReveal.js 초기화
    const sr = ScrollReveal({
        distance: '60px',   // 애니메이션 거리
        duration: 1000,     // 지속 시간
        easing: 'cubic-bezier(0.5, 0, 0, 1)', // 부드러운 이징
        reset: false        // 스크롤 올릴 때 다시 실행 안 함
    });

    // 공통 애니메이션
    sr.reveal('.reveal-up', { origin: 'bottom' });
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
    sr.reveal('.reveal-fade', { opacity: 0 });

    // 지연(delay)이 필요한 요소들은 HTML에 data-sr-delay="ms"로 개별 적용
    document.querySelectorAll('[data-sr-delay]').forEach(el => {
        sr.reveal(el, {
            delay: parseInt(el.dataset.srDelay)
        });
    });

    // 2. 제품 버튼 상호작용
    const productButtons = document.querySelectorAll('.product-button');
    
    productButtons.forEach(clickedButton => {
        clickedButton.addEventListener('click', () => {
            
            // 1. 모든 버튼에서 'active' 클래스 제거
            productButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // 2. 클릭된 버튼에만 'active' 클래스 추가
            clickedButton.classList.add('active');
        });
    });

    // 3. 패밀리 사이트 이동 기능 (추가됨)
    const familySiteSelect = document.getElementById('family-site-select');
    
    if (familySiteSelect) {
        familySiteSelect.addEventListener('change', (e) => {
            const selectedUrl = e.target.value;
            
            // value에 URL이 있을 경우에만 실행
            if (selectedUrl) {
                // 새 탭에서 열기
                window.open(selectedUrl, '_blank');
                // 선택 후 다시 기본값("패밀리 사이트")으로 변경
                e.target.value = "";
            }
        });
    }

});

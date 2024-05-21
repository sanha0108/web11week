const pixels = window.scrollY;
        const headerTag = document.querySelector("header")
        const sec2 = document.querySelector(".sec2")

        const mountain = document.querySelector(".mountain")
        const maintitleTop = document.querySelector(".MTtop")
        const maintitleBottom = document.querySelector(".mt3")

        const animationTags = document.querySelectorAll(".CTimg, .CTtextbox")

        document.addEventListener("scroll", function(){
            const pixels = window.scrollY;
            let sec2Top = sec2.getBoundingClientRect().top;
            let hdBottom = headerTag.getBoundingClientRect().bottom;

            if(pixels >= sec2Top){
                headerTag.classList.add("scrolled");
            }else{
                headerTag.classList.remove("scrolled");
            }

            if (pixels > 0) {
                mountain.style.animation = "fadeout 0.2s 0.1s both";
                maintitleTop.style.animation = "fadeout 0.2s 0.1s both";
                maintitleBottom.style.animation = "fadeout 0.2s 0.1s both";
            }

            if (pixels < hdBottom) {
                mountain.style.animation = "fadein 1s 0.1s both";
                maintitleTop.style.animation = "position 0.8s 0.1s both";
                maintitleBottom.style.animation = "position 0.8s 0.2s both";
            }
            
            // 본문 애니메이션
            animationTags.forEach(tag => {
                let tagTop = tag.getBoundingClientRect().top + window.scrollY;
                let tagBottom = tag.getBoundingClientRect().bottom + window.scrollY;

                if (pixels + window.innerHeight > tagTop && pixels < tagBottom) {                  
                    tag.style.animation = "position 0.6s 0.3s both";
                }else{
                    tag.style.animation = "";
                }
            });
        });

        window.addEventListener('load', function() {
            let mountainTop = mountain.getBoundingClientRect().top + window.scrollY;
            let mountainBottom = mountain.getBoundingClientRect().bottom + window.scrollY;
            const pixels = window.scrollY;

            if(pixels + window.innerHeight > mountainTop && pixels < mountainBottom){
                mountain.style.animation = "fadein 1s 0.1s both";

                maintitleTop.style.animation = "position 0.8s 0.1s both";
                maintitleBottom.style.animation = "position 0.8s 0.2s both";
            }
        });
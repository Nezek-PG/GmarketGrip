 // --- SCROLL REVEAL ENGINE (INTERSECTION OBSERVER) ---
    document.addEventListener("DOMContentLoaded", () => {
        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    // Opcjonalnie przestajemy obserwować element po jego ujawnieniu
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        document.querySelectorAll(".reveal-element").forEach(element => {
            revealObserver.observe(element);
        });
    });

    // Data Matrix Array for structural crossfades
    const featureDescriptions = [
        "Bypass sophisticated track time limits, physics boundaries, and simulation limit mechanics flawlessly with our hyper-optimized execution layer.",
        "Engineered to seamlessly support all windows versions",
        "Sophisticated memory virtualization patterns clean deep traces automatically. Run undetected with safe, low-level data hooks handling all calculations."
    ];

    function switchFeatureDescription(index, activeElement) {
        const textNode = document.getElementById("dynamic-description-text");
        if (textNode) {
            textNode.style.opacity = "0";
            textNode.style.transform = "translateX(-4px)";
            
            setTimeout(() => {
                textNode.innerText = featureDescriptions[index];
                textNode.style.opacity = "1";
                textNode.style.transform = "translateX(0px)";
            }, 180);
        }
        
        const siblings = activeElement.parentElement.querySelectorAll(".feature-tab-btn");
        siblings.forEach(btn => {
            btn.classList.remove("active");
            const label = btn.querySelector("span");
            if (label) {
                label.className = "text-xs font-mono text-zinc-400 tracking-wide transition-colors group-hover:text-white";
            }
            const dot = btn.querySelector(".dot-indicator");
            if (dot) {
                dot.className = "dot-indicator w-2 h-2 rounded-full bg-zinc-700 transition-all duration-300 group-hover:scale-125";
            }
        });
        
        activeElement.classList.add("active");
        const activeLabel = activeElement.querySelector("span");
        if (activeLabel) {
            activeLabel.className = "text-xs font-mono text-white tracking-wide";
        }
        const activeDot = activeElement.querySelector(".dot-indicator");
        if (activeDot) {
            activeDot.className = "dot-indicator w-2 h-2 rounded-full bg-[#d4ff00] transition-all duration-300 group-hover:scale-125";
        }
    }

    // KINETIC MOUSE PERSPECTIVE ENGINE FOR CENTRAL LOGO EMBLEM
    const logoField = document.getElementById('logoPerspectiveField');
    const kineticLogo = document.getElementById('kineticLogo');

    if (logoField && kineticLogo) {
        logoField.addEventListener('mousemove', (e) => {
            const bounds = logoField.getBoundingClientRect();
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height / 2;
            const skewX = (e.clientX - centerX) / 12;
            const skewY = (e.clientY - centerY) / 12;
            
            kineticLogo.style.transform = `rotateX(${-skewY}deg) rotateY(${skewX}deg) scale(1.08)`;
        });
        
        logoField.addEventListener('mouseleave', () => {
            kineticLogo.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    }

    // TELEMETRY LIVE ENGINE MATRIX
    const totalDistanceMetres = 7004;

    const traceCurves = Array.from({ length: 101 }, (_, idx) => {
        const pct = idx;
        let speed = 170;
        
        if (pct >= 0 && pct <= 5) speed = 178 + (pct / 5) * 40;
        else if (pct > 5 && pct <= 10) speed = 218 - ((pct - 5) / 5) * 160;
        else if (pct > 10 && pct <= 33) speed = 58 + ((pct - 10) / 23) * 194;
        else if (pct > 33 && pct <= 35) speed = 252 - ((pct - 33) / 2) * 130;
        else if (pct > 35 && pct <= 44.5) speed = 122 + ((pct - 35) / 9.5) * 88;
        else if (pct > 44.5 && pct <= 47) speed = 210 - ((pct - 44.5) / 2.5) * 118;
        else if (pct > 47 && pct <= 54) speed = 92 + ((pct - 47) / 7) * 110;
        else if (pct > 54 && pct <= 56) speed = 202 - ((pct - 54) / 2) * 34;
        else if (pct > 56 && pct <= 63) speed = 168 + ((pct - 56) / 7) * 68;
        else if (pct > 63 && pct <= 66) speed = 236 - ((pct - 63) / 3) * 94;
        else if (pct > 66 && pct <= 71) speed = 142 + ((pct - 66) / 5) * 86;
        else if (pct > 71 && pct <= 76) speed = 228 - ((pct - 71) / 5) * 106;
        else if (pct > 76 && pct <= 94.5) speed = 122 + ((pct - 76) / 18.5) * 142;
        else if (pct > 94.5 && pct <= 97) speed = 264 - ((pct - 94.5) / 2.5) * 190;
        else if (pct > 97 && pct <= 100) speed = 74 + ((pct - 97) / 3) * 98;

        return { pct, speed: Math.floor(speed) };
    });

    const canvasWorkspace = document.getElementById('interactiveCanvas');
    const indicator = document.getElementById('sliderIndicator');
    const dLabel = document.getElementById('tel-distance');
    const sLabel = document.getElementById('tel-speed');

    if (canvasWorkspace && indicator && dLabel && sLabel) {
        canvasWorkspace.addEventListener('mousemove', (e) => {
            const rect = canvasWorkspace.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const percentageX = Math.max(0, Math.min(100, (mouseX / rect.width) * 100));
            
            const currentDistance = Math.floor((percentageX / 100) * totalDistanceMetres);
            
            let targetNode = traceCurves[0];
            let minimumDelta = 100;
            
            traceCurves.forEach(node => {
                const delta = Math.abs(node.pct - percentageX);
                if (delta < minimumDelta) {
                    minimumDelta = delta;
                    targetNode = node;
                }
            });
            
            dLabel.innerText = `${currentDistance} m`;
            sLabel.innerText = `${targetNode.speed} km/h`;
            
            indicator.setAttribute('x1', percentageX);
            indicator.setAttribute('x2', percentageX);
        });
    }

    // 3D Parallax perspective loop for Hero Image
    const viewWrapper = document.getElementById('carPerspectiveWrapper');
    const viewImg = document.getElementById('carPerspectiveImage');

    if (viewWrapper && viewImg) {
        document.addEventListener('mousemove', (e) => {
            const horizontalAxis = (window.innerWidth / 2 - e.pageX) / 75;
            const verticalAxis = (window.innerHeight / 2 - e.pageY) / 75;
            viewWrapper.style.transform = `rotateY(${horizontalAxis}deg) rotateX(${verticalAxis}deg)`;
            viewImg.style.transform = `translateX(${horizontalAxis * 0.3}px) translateY(${verticalAxis * 0.3}px)`;
        });
    }

function AnimationLocomotive() {


  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
AnimationLocomotive()
function loaderAnimation() {

  var t2 = gsap.timeline();
  t2.from('.loader2 h1', {
    opacity: 0,
    duration: 3,
  })

  t2.to(".loader2 #h11", {
    x: -577,
    duration: 1,
    delay: -2,
  }, 'elem')
  t2.to(".loader2 #h12", {
    x: -70,
    duration: 1,
    delay: -2,
  }, 'elem')
  t2.to(".loader2 #h13", {
    x: 470,
    duration: 1,
    delay: -2,
  }, 'elem')
  t2.to(".loadertext h1", {
    opacity: 1,

  })
  t2.to('#loader', {
    top: "-100%",
    duration: 9,
  }, "p")
  t2.from("#pg-text-h1 h1", {
    opacity: 0,
    duration: 1,
    delay: 1,
    left: 200,
  }, "p")
}
function page2Animation() {
  var h1 = document.querySelector(".page2textbox h1");
  var texh1 = h1.textContent;
  var splited = texh1.split("");
  console.log(splited);
  var clutter = "";
  splited.forEach(function (elem) {
    clutter += `<span class='inline-block'>${elem === ' ' ? `&nbsp;` : elem}</span>`;
    console.log(clutter);
  })
  h1.innerHTML = clutter;
  gsap.from(".page2textbox h1 span", {
    y: 150,
    opacity: 0,
    duration: 0.3,
    ease: Power1.easeInOut,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -310%",

    }
  })

  Shery.imageEffect(".page2image img", {
    style: 3,
    // debug: true,
    gooey: true,
    config: { "uFrequencyX": { "value": 12, "range": [0, 100] }, "uFrequencyY": { "value": 12, "range": [0, 100] }, "uFrequencyZ": { "value": 10, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 1 }, "zindex": { "value": "9", "range": [-9999999, 9999999] }, "aspect": { "value": 0.8888888888888888 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] }, "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] } }

  })
}
function page3Animation(){

  Shery.mouseFollower()
  // Shery.makeMagnet("#nav-part2 h1");
  Shery.imageEffect(".page3 img", {
    style: 6,
    gooey: true,
    // debug:true,

  })
}
function page4Animation() {


  var h1 = document.querySelector(".page4text h1");
  var texh1 = h1.textContent;
  var splited = texh1.split("");
  console.log(splited);
  var clutter = "";
  splited.forEach(function (elem) {
    clutter += `<span class='inline-block'>${elem === ' ' ? `&nbsp;` : elem}</span>`;
    console.log(clutter);

  })
  h1.innerHTML = clutter;
  gsap.from(".page4text h1 span", {
    y: 150,
    opacity: 0,
    duration: 0.3,
    ease: Power1.easeInOut,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".page4",
      scroller: "#main",
      // markers: true,
      // pin:true,
      start: "top 80%",
      end: "top 40%",

    }


  })

  Shery.imageEffect(".page4image img", {
    style: 3,
    // debug: true,
    gooey: true,
    config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } }


  })
}
function page5Animation() {
  gsap.to(".box-cantainer", {
    left: "-200%",
    duration: 3,
    delay: 5,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -800%",
      pin: true,
      scrub: true,
    }
  });
}
function page6Animation() {

  var h1 = document.querySelector("#left-second h1");
  var texh1 = h1.textContent;
  var splited = texh1.split("");
  console.log(splited);
  var clutter = "";
  splited.forEach(function (elem) {
    clutter += `<span class='inline-block'>${elem === ' ' ? `&nbsp;` : elem}</span>`;
    console.log(clutter);

  })
  h1.innerHTML = clutter;
  gsap.from("#left-second h1 span", {
    y: 150,
    opacity: 0,
    duration: 0.3,
    ease: Power1.easeInOut,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      pin:true,
      start: "top 30%",
      end: "top 80%",

    }


  })




  Shery.imageEffect("#img-div img", {
    style: 3,
    // debug: true,
    gooey: true,
    config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } }


  })
  Shery.imageEffect("#img-div1 img", {
    style: 3,
    // debug: true,
    gooey: true,
    config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } }


  })
  Shery.imageEffect("#img-div2 img", {
    style: 3,
    // debug: true,
    // gooey: true,
    config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] }, "zindex": { "value": 9, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } }
  })
 
}
function page7Animation(){
  
  var h1 = document.querySelector("#left-page6 h1");
  var texh1 = h1.textContent;
  var splited = texh1.split("");
  console.log(splited);
  var clutter = "";
  splited.forEach(function (elem) {
    clutter += `<span class='inline-block'>${elem === ' ' ? `&nbsp;` : elem}</span>`;
    console.log(clutter);

  })
  h1.innerHTML = clutter;
  gsap.from("#left-page6 h1 span", {
    y: 150,
    opacity: 0,
    duration: 0.3,
    ease: Power1.easeInOut,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      // pin:true,
      start: "top 80%",
      end: "top 50%",

    }


  })

  Shery.imageEffect("#right-page6 img", {
    style: 3,
    // debug: true,
    gooey: true,


  })
}
function page8Animation() {
  Shery.imageEffect("#page8 img", {
    style: 3,
    // debug: true,
    gooey: true,
    config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } }

  })
}

loaderAnimation();
page2Animation();
page3Animation();
page4Animation()
page5Animation();
page6Animation();
page7Animation()
page8Animation()
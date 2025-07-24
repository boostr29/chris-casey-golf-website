import React from "react";
import { Helmet } from "react-helmet";
import { RevealFrom } from "../components/RevealFrom";
import { Stars } from '../components/Stars';

export function ReviewsSection() {
    return (

<section id="reviews" className="
bg-gradient-to-b from-green-600 to-green-800
overflow-hidden md:pt-40 lg:pt-50 pt-30 custom-px">
<Helmet>
  <title>Golfer Reviews - Chris Casey Golf Instruction</title>
  <meta
    name="description"
    content="Real reviews, from real success stories of golfers greatly improving their golf game."
  />
</Helmet>
<div className="flex justify-center">
    <RevealFrom
      triggerOnce={true}
      className="flex flex-col justify-center text-center"
      initial={{ opacity: 0, y: -200 }}
      animateIn={{ opacity: 1, y: 0 }}
      threshold={0}
      rootMargin="0px 0px -16% 0px"
    >
      <h2 className="font-header 
      text-[clamp(2.2rem,4.8vw,4rem)]
        leading-[1.2]
      text-gray-100 font-semibold mb-4">Success Stories</h2>
      <p className="text-lg text-gray-100">These reviews reflect the real progress our students are making.</p>
      <div className="flex flex-wrap shrink justify-center mt-10">
        <a href="#contact" className="main-button">Schedule a Lesson</a>
      </div>
    </RevealFrom>
</div>

<div className="flex flex-col md:flex-row custom-my py-10 md:py-1 gap-5">
    <div className="w-full flex lg:gap-5 flex-col md:flex-col xl:flex-row">
        <div className="flex flex-col justify-start md:w-full xl:w-1/2">
            <RevealFrom
            triggerOnce={true}
            className="flex justify-center"
            initial={{ opacity: 0, y: 100 }}
            animateIn={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px 0px -22% 0px"
            >
            <Stars
                rating={5}
                name="JG"
                review="Chris has he helped me make significant improvements, and his attention to detail with swing analysis has really set him apart. He takes the time to break down each aspect of my swing, using cutting-edge tools and personalized feedback that have made all the difference. It's clear that he goes above and beyond and I truly appreciate the extra effort."
            />
            </RevealFrom>
            <RevealFrom
            triggerOnce={true}
            className="flex justify-center"
            initial={{ opacity: 0, y: 100 }}
            animateIn={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px 0px -25% 0px"
            >
            <Stars
                rating={5}
                name="Fred"
                review="Chris is a great golf instructor who quickly spots issues and helps you improve. I've definitely seen results on the course since working with him."
            />
            </RevealFrom>
        </div>
        <div className="flex flex-col mt-0 md:w-full xl:w-1/2 justify-start">
            <RevealFrom
            triggerOnce={true}
            className="flex justify-center"
            initial={{ opacity: 0, y: 100 }}
            animateIn={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px 0px -18% 0px"
            >
            <Stars
                rating={5}
                name="Adam"
                review="Chris is a fantastic coach and an amazing golfer. He makes swings changes and adjustments extremely digestible and easy understand. I've been working with him for 3 months and if you saw my swing 3 months ago you wouldn't wouldn't even recognize it. I've shot my lowest rounds since working with him. It's first time I actually shot shaping. More than that he's helped me understand the mental aspect of game which was a game changer. I've had different coaches throughout my life in multiple states. Some at the local muni and others country clubs. Chris has given me the best experience as a coach."
            />
            </RevealFrom>
            <RevealFrom
            triggerOnce={true}
            className="flex justify-center"
            initial={{ opacity: 0, y: 100 }}
            animateIn={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px 0px -18% 0px"
            >
            <Stars
                rating={5}
                name="Evan"
                review="Chris is a great instructor. He's been helping rebuild my swing and I'm already seeing results and feeling more confident. Flexible schedule and good communication."
            />
            </RevealFrom>
        </div>
    </div>
    <div className="w-full flex lg:gap-5 flex-col md:flex-col xl:flex-row">
        <div className="flex flex-col justify-start md:w-full xl:w-1/2">
                <RevealFrom
                triggerOnce={true}
                className="flex justify-center"
                initial={{ opacity: 0, y: 100 }}
                animateIn={{ opacity: 1, y: 0 }}
                threshold={0}
                rootMargin="0px 0px -10% 0px"
                >
                <Stars
                    rating={5}
                    name="Andrew"
                    review="Chris is able to easily identify issues and how to correct them. You spend the majority of your sessions actually practicing and getting better. He has also helped with my wedge game. I've never been a big spinner of the golf ball and in about 10 minutes he had me ripping it back 5 yards of if I wanted. Stop screeching, this is your guy!"
                />
                </RevealFrom>
                <RevealFrom
                triggerOnce={true}
                className="flex justify-center"
                initial={{ opacity: 0, y: 100 }}
                animateIn={{ opacity: 1, y: 0 }}
                threshold={0}
                rootMargin="0px 0px -13% 0px"
                >
                <Stars
                    rating={5}
                    name="Jordan"
                    review="I saw Chris for a short game lesson and he was very knowledgeable about all facets of the game and sharp in identifying and resolving the kinks in my technique. He is also fun to work with and can demonstrate a variety of shots at will."
                />
                </RevealFrom>
        </div>
        <div className="flex flex-col md:w-full justify-start xl:w-1/2">
                <RevealFrom
                triggerOnce={true}
                className="flex justify-center"
                initial={{ opacity: 0, y: 120 }}
                animateIn={{ opacity: 1, y: 0 }}
                threshold={0}
                rootMargin="0px 0px -15% 0px"
                >
                <Stars
                    rating={5}
                    name="Reshad"
                    review="Working with Chris has been incredibly productive for my game. He explains concepts in a way that's easy to understand and apply, which has made a huge difference for me. I've seen noticeable improvements in both my swing and overall consistency. Highly recommend him to anyone looking to improve."
                />
                </RevealFrom>
                <RevealFrom
                triggerOnce={true}
                className="flex justify-center"
                initial={{ opacity: 0, y: 200 }}
                animateIn={{ opacity: 1, y: 0 }}
                threshold={0}
                rootMargin="0px 0px -19% 0px"
                >
                <Stars
                    rating={5}
                    name="Vinay"
                    review="Chris is a great golf coach. He is really patient and understands the swing and the game. he helped me gain about anywhere to 15-30 yards of the tee consistently fairway balls."
                />
                </RevealFrom>
        </div>
    </div>
</div>

</section>

    );
}
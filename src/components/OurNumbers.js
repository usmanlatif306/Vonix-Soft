import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { coolEffects } from "../data";
export default function OurNumbers() {
  const [focus, setFocus] = useState(false);
  return (
    <section className="ourNumbers" id="projects">
      <h1>
        <span>Our</span> Statics
      </h1>
      {/*<p className="">Our Numbers</p>*/}
      <div className="container-fluid coolEffect mt-5">
        <div className="row">
          {coolEffects.map((item) => (
            <div className="col-md-3 col-sm-6 col-12" key={item.id}>
              <i className={item.icon}></i>
              <h2>
                <CountUp
                  start={focus ? 0 : null}
                  end={item.title}
                  duration={4}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <ReactVisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
                <sup>+</sup>
              </h2>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

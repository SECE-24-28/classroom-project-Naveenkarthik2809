import React from "react";
import { ImpactGlanceStyle } from "./impact-glance-style";

const ImpactGlance = () => {
  return (
    <ImpactGlanceStyle>
      <h1 className="title">
        Impact at a <span>Glance</span>
      </h1>

      <div className="grid">
        {/* Box 1 */}
        <div className="card pink">
          <div>
            <p className="label">Colleges</p>
            <p className="value">100+</p>
          </div>
          <img
            src="https://img.icons8.com/emoji/512/school-emoji.png"
            alt="college"
          />
        </div>

        {/* Box 2 */}
        <div className="card blue">
          <div>
            <p className="label">Students</p>
            <p className="value">1,00,000</p>
          </div>
          <img
            src="https://img.icons8.com/emoji/512/backpack-emoji.png"
            alt="students"
          />
        </div>

        {/* Box 3 */}
        <div className="card green">
          <div>
            <p className="label">Study Materials</p>
            <p className="value">1000+</p>
          </div>
          <img
            src="https://img.icons8.com/emoji/512/books-emoji.png"
            alt="materials"
          />
        </div>

        {/* Box 4 */}
        <div className="card orange">
          <div>
            <p className="label">Professional Trainers</p>
            <p className="value">150</p>
          </div>
          <img
            src="https://img.icons8.com/emoji/512/people-hugging.png"
            alt="trainers"
          />
        </div>
      </div>
    </ImpactGlanceStyle>
  );
};

export default ImpactGlance;

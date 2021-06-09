import React from "react";

import "./hajj.css";

function Hajj() {
  return (
    <div className="hajj-container">
      <div className="hajj-title">
        <div className="overall">
          <div>.</div>
          <div className="short-notice">
            <p>
              Dear guests, our neighbors Hajj is complete put together for you
              first hand.
              <br /> We guarantee you all services contractually, because this
              is based on a confidential mutuality. After all, the Hajj should
              be sensible and as good as possible be performed . If you should
              choose us, that would be the right decision.
            </p>
          </div>
          <div className="our-title">
            <h4 className="">HAJJ FACTS</h4>
          </div>
        </div>
      </div>
      <div className="hajj-desc">
        <p>
          Hajj is an important pillar of Islam. But how much do you know about
          it? Well, here are our top Hajj facts (in no particular order) to
          share with you everything you need to know about Hajj!
        </p>
      </div>
      <div className="view-kaaba"></div>
      <h6 style={{ marginRight: "32%" }}>View of Kaa'ba</h6>
      <div className="more-details">
        <h2>1. Hajj is the fifth pillar of Islam</h2>
        <p>
          An Islamic duty, undertaking Hajj is the fifth pillar in Islam. In the
          Holy Qur’an, Allah (SWT) commands us to visit Makkah and complete it –
          in fact, there’s a whole Surah (chapter) in the Qur’an named after it!
          In this Chapter, Allah (SWT) tells us:
        </p>
        <h4>
          “We designated for Abraham the site of the House, [saying], ‘Do not
          associate anything with Me and purify My House for those who perform
          Tawaf and those who stand [in prayer] and those who bow and
          prostrate.’ And proclaim to the people the Hajj [pilgrimage]; they
          will come to you on foot and on every lean camel; they will come from
          every distant pass – That they may witness benefits for themselves and
          mention the name of Allah on known days over what He has provided for
          them of [sacrificial] animals… Then let them… fulfil their vows and
          perform Tawaf around the ancient House.’ That [has been commanded],
          and whoever honours the sacred ordinances of Allah – it is best for
          him in the sight of his Lord…” (22:26-30)
        </h4>{" "}
        <br />
        <h2>2. It’s much older than 1,500 years!</h2>
        <div className="second-image"></div>
        <h6 style={{ marginRight: "32%" }}>
          Pilgrims praying around the Ka’aba
        </h6>
        <p>
          In line with the Islamic calendar, Hajj takes places during the same
          period of the lunar calendar each year. This, of course, means that
          this will vary according to the date in the Gregorian calendar each
          year. This year Dhul Hijjah will run from 22nd July to 19th August
          <br />
          Dhul Hijjah is a very important month. Not only is it the last month
          of the Islamic year, but during this period as we ma Hajj, we also
          celebrate Eid Al-Adha – the sacrifice of Prophet Ibrahim (SAW). During
          this time, we offer Qurbani to the poor and prepare for the new
          <br />
          Islamic year ahead. For those who are not going on Hajj, the important
          fasting day of Arafah also takes place on 9th Dhul Hijjah, offering a
          chance for our sins to be forgiven by Allah (SWT).
        </p>
        <h2>4. Over 2.5 million people a year go on Hajj!</h2>
        <div className="fourth-image"></div>
      </div>
    </div>
  );
}

export default Hajj;

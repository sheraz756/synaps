import { Button, FormControlLabel, Checkbox } from "@mui/material";
import styles from "./index.module.css";
const FrameComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <b className={styles.welcome}>WELCOME</b>
      <b className={styles.services}>SERVICES</b>
      <b className={styles.portfolio}>PORTFOLIO</b>
      <div className={styles.withInnovationContainer}>
        <p className={styles.withInnovationSkills}>
          <span className={styles.with}>{`With `}</span>
          <span className={styles.innovation}>Innovation</span>
          <span>{` & Skills`}</span>
        </p>
        <p className={styles.withInnovationSkills}>We Lead Business</p>
        <p className={styles.forward}>Forward</p>
      </div>
      <div className={styles.whatWeDoContainer}>
        <span>{`What We `}</span>
        <span className={styles.innovation}>Do ?</span>
      </div>
      <div className={styles.getInTouchContainer}>
        <span>{`Get in `}</span>
        <span className={styles.innovation}>Touch</span>
      </div>
      <div className={styles.simplyFillIn}>Simply fill in the form below</div>
      <div className={styles.letsBuildSomethingContainer}>
        <p className={styles.withInnovationSkills}>Let’s Build Something</p>
        <p className={styles.withInnovationSkills}>Amazing together.</p>
      </div>
      <div className={styles.whetherItsA}>
        Whether it’s a brand refresh, public relations push, new website or
        end-to-endbehaviour change campaign — we’re interested and ready to talk
        solutions.
      </div>
      <Button
        className={styles.frameChild}
        sx={{ width: 168 }}
        variant="outlined"
        color="primary"
      >
        Join Us
      </Button>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.learnMore}>
          <span>{`Learn `}</span>
          <span className={styles.innovation}>More</span>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <Button
        className={styles.frameItem}
        sx={{ width: 170 }}
        variant="outlined"
        color="primary"
      >
        Learn More
      </Button>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <div className={styles.viewAll}>View All</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild2} />
          <div className={styles.webDesign}>Web Design</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.logoDesign}>Logo Design</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.rectangleDiv} />
          <div className={styles.appDesign}>App Design</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.development}>Development</div>
        </div>
      </div>
      <Button
        className={styles.frameInner}
        sx={{ width: 170 }}
        variant="outlined"
        color="primary"
      >
        Learn More
      </Button>
      <FormControlLabel
        className={styles.groupFormcontrollabel}
        label=""
        control={<Checkbox color="primary" size="medium" />}
      />
      <FormControlLabel
        className={styles.frameChild1}
        label=""
        control={<Checkbox color="primary" size="medium" />}
      />
      <div className={styles.rectangleWrapper}>
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.rectangleFrame}>
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.rectangleWrapper1}>
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild9} />
        <div className={styles.webDesignContainer}>
          <p className={styles.withInnovationSkills}>{`Web Design &`}</p>
          <p className={styles.withInnovationSkills}>Web Development</p>
        </div>
        <div className={styles.div}>01</div>
        <div className={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum
        </div>
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupChild9} />
        <div className={styles.webDesignContainer}>
          <p className={styles.withInnovationSkills}>{`Web Design &`}</p>
          <p className={styles.withInnovationSkills}>Web Development</p>
        </div>
        <div className={styles.div}>01</div>
        <div className={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum
        </div>
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.groupChild9} />
        <div className={styles.webDesignContainer}>
          <p className={styles.withInnovationSkills}>{`Web Design &`}</p>
          <p className={styles.withInnovationSkills}>Web Development</p>
        </div>
        <div className={styles.div}>01</div>
        <div className={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum
        </div>
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-32@2x.png" />
      <img className={styles.frameChild2} alt="" src="/rectangle-33@2x.png" />
      <img className={styles.frameChild3} alt="" src="/rectangle-34@2x.png" />
      <img className={styles.frameChild4} alt="" src="/group-31.svg" />
      <img className={styles.frameChild5} alt="" src="/group-32.svg" />
      <div className={styles.frameChild6} />
      <div className={styles.rectangleParent7}>
        <div className={styles.groupChild12} />
        <div className={styles.fullPicture}>Full Picture</div>
      </div>
      <img className={styles.oq3a7s11Icon} alt="" src="/oq3a7s1-1@2x.png" />
      <b className={styles.contactUs}>CONTACT US</b>
      <div className={styles.groupParent1}>
        <div className={styles.fullNameParent}>
          <div className={styles.fullName}>Full Name</div>
          <div className={styles.ellipseDiv} />
          <div className={styles.required}>Required</div>
        </div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.emailAddressParent}>
          <div className={styles.fullName}>Email Address</div>
          <div className={styles.ellipseDiv} />
          <div className={styles.required}>Required</div>
        </div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.groupParent3}>
        <div className={styles.phoneNumberParent}>
          <div className={styles.fullName}>Phone Number</div>
          <div className={styles.ellipseDiv} />
          <div className={styles.required}>Required</div>
        </div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.groupParent4}>
        <div className={styles.tellUsAboutYourProjectParent}>
          <div className={styles.fullName}>Tell us about your project</div>
          <div className={styles.ellipseDiv} />
          <div className={styles.required}>Required</div>
        </div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.rectangleParent8}>
        <div className={styles.groupChild19} />
        <div className={styles.sendMessage}>
          <span>{`Send `}</span>
          <span className={styles.innovation}>Message</span>
        </div>
      </div>
      <div className={styles.frameChild7} />
      <div className={styles.rectangleParent9}>
        <div className={styles.groupChild20} />
        <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
        <div className={styles.twitter}>Twitter</div>
      </div>
      <div className={styles.rectangleParent10}>
        <div className={styles.groupChild21} />
        <div className={styles.facebook}>Facebook</div>
      </div>
      <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
      <div className={styles.rectangleParent11}>
        <div className={styles.groupChild22} />
        <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
        <div className={styles.linkedIn}>Linked In</div>
      </div>
      <div className={styles.rectangleParent12}>
        <div className={styles.groupChild23} />
        <div className={styles.subscribeToOur}>
          Subscribe to our news letter
        </div>
      </div>
      <div className={styles.synapsSolutionsSoftwareIncParent}>
        <div className={styles.synapsSolutionsSoftware}>
          2023, Synaps Solutions Software Inc., All Rights Reserved.
        </div>
        <div className={styles.cParent}>
          <div className={styles.c}>C</div>
          <div className={styles.groupChild24} />
        </div>
      </div>
      <img className={styles.synapsLogo2} alt="" src="/synaps-logo-2@2x.png" />
      <div className={styles.synapsSolutions}>
        <span>{`Synaps `}</span>
        <span className={styles.innovation}>Solutions</span>
      </div>
    </div>
  );
};

export default FrameComponent;

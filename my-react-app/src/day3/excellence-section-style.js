import styled from "styled-components";

export const ExcellenceSectionStyle = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px; /* Prevents horizontal scroll */
  font-family: "Inter", sans-serif;
  color: #2d334a;
  box-sizing: border-box;

  .title {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 25px;
    line-height: 1.3;
    word-wrap: break-word;
  }

  .description {
    font-size: 17px;
    line-height: 1.8;
    max-width: 850px;
    margin: 0 auto 50px auto;
    color: #616d85;
    text-align: center;
    padding: 0 10px;
    word-wrap: break-word;
  }

  /* Vision + Mission container */
  .vm_container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    padding: 0 10px;
    box-sizing: border-box;
  }

  /* Vertical Divider */
  .divider {
    width: 1px;
    background-color: #dfe3eb;
    height: auto;
    min-height: 150px;
  }

  /* Vision + Mission sections */
  .vision,
  .mission {
    flex: 1;
    text-align: left;
  }

  .vm_heading {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  .vision_bar {
    width: 4px;
    height: 26px;
    background-color: #f4a942;
    border-radius: 2px;
  }

  .mission_bar {
    width: 4px;
    height: 26px;
    background-color: #00aee0;
    border-radius: 2px;
  }

  .vm_text {
    font-size: 16px;
    line-height: 1.7;
    color: #616d85;
    word-wrap: break-word;
  }

  /* ---------------------------------- */
  /* 📱 RESPONSIVE - For Tablets/Mobile */
  /* ---------------------------------- */
  @media (max-width: 900px) {
    .vm_container {
      flex-direction: column;
      gap: 50px;
      text-align: center;
    }

    .divider {
      display: none;
    }

    .vision,
    .mission {
      text-align: center;
    }
  }

  /* 📱 Small Phones (up to 480px) */
  @media (max-width: 480px) {
    .title {
      font-size: 28px;
    }

    .vm_heading {
      font-size: 22px;
    }

    .description,
    .vm_text {
      font-size: 15px;
    }
  }
`;

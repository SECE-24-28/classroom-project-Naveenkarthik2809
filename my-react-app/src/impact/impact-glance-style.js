import styled from "styled-components";

export const ImpactGlanceStyle = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 80px auto;
  padding: 0 32px;
  font-family: "Inter", sans-serif;
  box-sizing: border-box;

  /* ------------------ TITLE ------------------ */
  .title {
    text-align: center;
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 60px;
    color: #111;

    span {
      color: #ff2f53;
    }
  }

  /* ------------------ GRID ------------------ */
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }

  /* ------------------ CARD ------------------ */
  .card {
    background: #ffffff;
    border-radius: 22px;
    padding: 32px 36px;
    height: 190px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Premium shadow */
    box-shadow:
      0px 4px 10px rgba(0, 0, 0, 0.05),
      0px 12px 32px rgba(0, 0, 0, 0.07);

    /* Smooth animation */
    transform: translateY(0px);
    transition: all 0.25s ease;

    &:hover {
      transform: translateY(-6px) scale(1.015);
      box-shadow:
        0px 6px 16px rgba(0, 0, 0, 0.08),
        0px 18px 40px rgba(0, 0, 0, 0.10);
    }

    img {
      width: 130px;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.15));
    }

    .label {
      font-size: 20px;
      color: #444;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .value {
      font-size: 40px;
      font-weight: 800;
      color: #111;
      letter-spacing: -1px;
      margin-top: 4px;
    }
  }

  /* ------------------ TRAINER CARD BG IMAGE ------------------ */
  .orange {
    background: linear-gradient(135deg, #fff1da, #ffe5c2),
      url("https://img.icons8.com/color/480/groups.png");
    background-position: right 20px center;
    background-repeat: no-repeat;
    background-size: 120px;
  }

  /* ------------------ OTHER COLORS ------------------ */
  .pink {
    background: linear-gradient(135deg, #ffe5ec, #ffd3dd);
  }

  .blue {
    background: linear-gradient(135deg, #e7f2ff, #d9e9ff);
  }

  .green {
    background: linear-gradient(135deg, #e8fff1, #d9ffe9);
  }

  /* ------------------ TABLET ------------------ */
  @media (max-width: 900px) {
    margin-top: 50px;

    .title {
      font-size: 36px;
      margin-bottom: 40px;
    }

    .grid {
      gap: 25px;
    }

    .card {
      height: 170px;
      padding: 28px 30px;
    }

    .orange {
      background-size: 90px;
    }

    .value {
      font-size: 32px;
    }
  }

  /* ------------------ MOBILE ------------------ */
  @media (max-width: 600px) {
    margin-top: 40px;

    .title {
      font-size: 30px;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .card {
      height: auto;
      padding: 24px 26px;
    }

    .orange {
      background-position: right 10px center;
      background-size: 70px;
    }

    .label {
      font-size: 18px;
    }

    .value {
      font-size: 28px;
    }
  }
`;

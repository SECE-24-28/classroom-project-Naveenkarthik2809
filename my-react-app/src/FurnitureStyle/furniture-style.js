import styled from 'styled-components';

export const FurnitureStyle = styled.div`
  margin: 0;
  font-family: "Poppins", sans-serif;

  /* --- HERO SECTION --- */
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 80px;
    min-height: 100vh;
    background: linear-gradient(135deg, #fff1e3, #ffffff);
  }

  /* --- LEFT CONTENT --- */
  .hero-content {
    max-width: 520px;
  }

  .hero-content h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 20px;
  }

  .orange {
    color: #ff8b00;
  }

  .subtext {
    font-size: 18px;
    color: #555;
    margin-bottom: 40px;
  }

  /* --- BUTTONS --- */
  .btn-group {
    display: flex;
    gap: 16px;
  }

  .btn-dark {
    background: #1a1a1a;
    color: #fff;
    border: none;
    padding: 14px 32px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.25s;
  }

  .btn-dark:hover {
    transform: translateY(-2px);
    background: #000;
  }

  .btn-light {
    background: transparent;
    border: 2px solid #000;
    padding: 14px 32px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.25s;
  }

  .btn-light:hover {
    background: #f3f3f3;
  }

  /* --- RIGHT IMAGE --- */
  .hero-image img {
    width: 650px;
    height: auto;
    object-fit: cover;
    border-top-left-radius: 320px;
    border-bottom-left-radius: 320px;
    box-shadow: 0px 10px 40px rgba(0,0,0,0.1);
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 1000px) {
    .hero {
      flex-direction: column;
      text-align: center;
      padding: 40px;
    }

    .hero-image img {
      width: 80%;
      margin-top: 30px;
      border-radius: 20px;
    }
  }
`;

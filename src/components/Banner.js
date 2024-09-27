import styled from "styled-components"

const Banner = () => {
    return (
        <StyledWrapper>
            <div className="styled-container d-flex justify-content-center align-items-center banner">
                <div className="ms-4 text-center">
                    <h1 className="fw-bold animacao-inicial">O MELHOR HAMBURGER DO MUNDO!</h1>
                    <h5 className="animacao-inicial"><i class="bi bi-caret-down-fill seta-animada"></i> PEÇA AGORA MESMO! <i class="bi bi-caret-down-fill seta-animada"></i></h5>
                </div>
                <img className="my-5 animacao-inicial" src="images/hamburger.jpg" alt="Hamburger" />
            </div>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
  .styled-container {
  /* Basic dimensions and centering */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Dark mode colors and gradient */
  background: rgba(18, 18, 18, 0.2); /* Fallback for browsers that don't support gradients */
  background: linear-gradient(
    135deg,
    rgba(18, 18, 18, 0.2) 25%,
    rgba(90, 90, 90, 0.2) 25%,
    rgba(90, 90, 90, 0.2) 50%,
    rgba(18, 18, 18, 0.2) 50%,
    rgba(18, 18, 18, 0.2) 75%,
    rgba(90, 90, 90, 0.2) 75%,
    rgba(90, 90, 90, 0.2)
  );
  background-size: 40px 40px;

  /* Animation */
  animation: move 4s linear infinite;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}

`;

export default Banner
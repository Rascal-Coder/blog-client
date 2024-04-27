import { css } from '@emotion/react'

export const themeSwitchStyle = css`
  &.light {
    .btn-switch {
      right: auto;
      left: 9%;
      animation: animationClickOn 0.7s;
    }
  }

  &.dark {
    .btn-switch {
      left: auto;
      right: 9%;
      animation: animationClickOff 0.7s;
    }
  }

  .theme-switch {
    #switch {
      background-color: var(--color-secondary-bg);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #switch {
      border: none;
      width: 15vw;
      height: 8vw;
      border-radius: 4vw;
      position: absolute;
      cursor: pointer;

      .btn-switch {
        display: block;
        background-color: var(--color-active);
        width: 6vw;
        height: 6vw;
        border-radius: 3vw;
        position: absolute;
        z-index: 0;
        top: 13%;
      }
      .theme-icon {
        position: absolute;
        z-index: 1;
        top: 26%;

        &.sun {
          left: 15%;
        }
        &.moon {
          right: 15%;
        }
      }

      //responsive
      @media only screen and (max-width: 1130px) {
        width: 10rem;
        height: 5rem;
        border-radius: 5rem;

        .btn-switch {
          width: 3.8rem;
          height: 3.8rem;
          border-radius: 3rem;
        }
      }
      //responsive
      @media only screen and (min-width: 1620px) {
        width: 15rem;
        height: 8rem;
        border-radius: 5rem;

        .switch-side {
          &--left,
          &--right {
            width: 10rem;
            height: 8rem;
            border-radius: 4rem;
          }
        }

        .btn-switch {
          width: 6rem;
          height: 6rem;
          border-radius: 3vw;
        }
      }
    }
  }
  @keyframes animationClickOff {
    0% {
      right: auto;
      left: 9%;
    }

    50% {
      width: 13vw;
    }

    100% {
      left: auto;
      right: 9%;
    }
  }

  @keyframes animationClickOn {
    0% {
      left: auto;
      right: 9%;
    }

    50% {
      width: 13vw;
    }

    100% {
      right: auto;
      left: 9%;
    }
  }
  //responsive
  @media only screen and (max-width: 1130px) {
    @keyframes animationClickOff {
      0% {
        right: auto;
        left: 9%;
      }

      50% {
        width: 8.5rem;
      }

      100% {
        left: auto;
        right: 9%;
      }
    }

    @keyframes animationClickOn {
      0% {
        left: auto;
        right: 9%;
      }

      50% {
        width: 8.5rem;
      }

      100% {
        right: auto;
        left: 9%;
      }
    }
  }
  //responsive
  @media only screen and (min-width: 1800px) {
    @keyframes animationClickOff {
      0% {
        right: auto;
        left: 9%;
      }

      50% {
        width: 13rem;
      }

      100% {
        left: auto;
        right: 9%;
      }
    }

    @keyframes animationClickOn {
      0% {
        left: auto;
        right: 9%;
      }

      50% {
        width: 13rem;
      }

      100% {
        right: auto;
        left: 9%;
      }
    }
  }
`

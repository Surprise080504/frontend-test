import styled from 'styled-components'
import mq from 'styles/mq'

export const Wrapper = styled.div`
  width: 40rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > span {
    display: block;
    border-radius: 50%;
    position: absolute;
    opacity: 0.2;
    z-index: -1;

    &:nth-of-type(1) {
      width: 29rem;
      height: 29rem;
      background: rgba(11, 15, 114, 0.3);
      box-shadow: 0 0.6rem 13rem rgba(255, 255, 255, 0.24),
        0 4.4rem 8.6rem rgba(48, 56, 229, 0.97),
        inset 0 -0.6rem 1rem 0.3rem rgba(103, 99, 99, 0.4);
    }

    &:nth-of-type(2) {
      width: 42rem;
      height: 42rem;
      background: rgba(48, 56, 229, 0.5);
      box-shadow: 0 0.6rem 13rem rgba(255, 255, 255, 0.24),
        0 4.4rem 8.6rem rgba(48, 56, 229, 0.45),
        inset 0 -0.6rem 0.9rem 0.3rem rgba(103, 99, 99, 0.4);
    }

    &:nth-of-type(3) {
      width: 55rem;
      height: 55rem;
      background: rgba(48, 56, 229, 0.29);
      box-shadow: 0 0 8.6rem rgba(108, 115, 247, 0.45),
        inset 0 0 3.7rem 0.3rem #3038e5;
    }

    &:nth-of-type(4) {
      width: 66rem;
      height: 66rem;
      background: rgba(48, 56, 229, 0.29);
      box-shadow: 0 0 8.6rem rgba(108, 115, 247, 0.45),
        inset 0 0 3.7rem 0.3rem #3038e5;
    }

    &:nth-of-type(5) {
      width: 79rem;
      height: 79rem;
      background: rgba(48, 56, 229, 0.29);
      box-shadow: 0 0 8.6rem rgba(108, 115, 247, 0.45),
        inset 0 0 3.7rem 0.3rem #3038e5;
    }

    &:nth-of-type(6) {
      width: 93rem;
      height: 93rem;
      background: rgba(48, 56, 229, 0.29);
      box-shadow: 0 0 8.6rem rgba(108, 115, 247, 0.45),
        inset 0 0 3.7rem 0.3rem #3038e5;
    }

    ${mq.medium} {
      &:nth-of-type(1) {
        width: 40rem;
        height: 40rem;
      }

      &:nth-of-type(1) {
        width: 57rem;
        height: 57rem;
      }

      &:nth-of-type(3) {
        width: 74rem;
        height: 74rem;
      }

      &:nth-of-type(4) {
        width: 91rem;
        height: 91rem;
      }

      &:nth-of-type(5) {
        width: 109rem;
        height: 109rem;
      }

      &:nth-of-type(6) {
        width: 128rem;
        height: 128rem;
      }
    }
  }
`

export const Icon = styled.img`
  max-width: 17.6rem;

  ${mq.medium} {
    max-width: 25rem;
  }
`

import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-left: 15rem;
`;

export const SectionBackground = styled.div`
   margin-top: 0%;
   background: #00C667;
   background-image: url("https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
   background-repeat: no-repeat;
   background-size: cover;
   border-radius: 16px 16px 0px 0px;
   width: 100%;
   height: 35vh;
   display: flex;
   justify-content: center;
`;

export const PhotoBackground = styled.div`
   margin-top: 25vh;
`;

export const UserPhoto = styled.img`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   border: 3px solid #00C667;
`;

export const SectionUserInfo = styled.div`
margin-top: 15vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 50vw;
   gap: 50px;
`;

export const UserInfoName = styled.div`
   width: 30vw;
   padding: 10px 0px 10px 20px;
   background: #1D629D;
   border-radius: 10px;
`;

export const LabelUserName = styled.h4`
   color: white;
   font-weight: 900;
`;

export const UserName = styled.h2`
   color: #00C667;
   margin-top: 7px;
`;


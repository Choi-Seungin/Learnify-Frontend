export default function KakaoLogin() { 
  const KAKAO_CLIENT_ID = "kakao_key"; 
  const REDIRECT_URI = "https://choi5801.xyz/kakao/login/oauth"; 
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

  const login = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return <a onClick={login}><img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" /></a>;
}
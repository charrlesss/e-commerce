import React from "react";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, Fprovider, Gprovider } from "../../firebaseConfig";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countAndRemoveDuplicates } from "../layout/header";
import { closeModal } from "../../store/reduces/modal";
import Confetti from "react-confetti";

export default function FirebaseAuth() {
  const showModal = useSelector((state) => state.modal.modalShow);
  const item = useSelector((state) => state.addToCart.cart);
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  const handleFacebookLogin = () => {
    signInWithPopup(auth, Fprovider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        fetch(
          `https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`
        )
          .then((response) => response.blob())
          .then((blob) => {
            setProfile(URL.createObjectURL(blob));
          })
          .catch(console.log);

        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFacebookLogout = () => {};
  const handleGoogleLogin = () => {
    signInWithPopup(auth, Gprovider)
      .then((result) => {
        setProfile(result.user.photoURL);
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <React.Fragment>
      {showModal && (
        <div
          style={{ backgroundColor: " rgba(255,255,255,0.5)" }}
          className=" fixed z-[99999]  w-screen flex justify-center items-center h-screen overflow-hidden  "
        >
          {user ? (
            <div className="w-screen h-screen bg-white flex justify-center items-center ">
              <Confetti />

              <div className="w-full h-auto ">
                <h1 className="text-8xl font-semibold text-center mb-20 text-orange-600">
                  Congratulations
                </h1>
                <div className=" w-full text-center flex justify-center flex-col">
                  <img
                    src={profile}
                    className="mx-auto rounded-full w-[200px] h-auto"
                  />
                  <div className="text-xl my-5 font-semibold">
                    {user.displayName}
                  </div>
                  <div className="text-gray-400">{user.email}</div>
                  <div className="font-semibold text-sm my-2">
                    <span className="font-semibold text-sm">
                      Verified Email :
                    </span>
                    <span
                      className={
                        user.emailVerified ? "ml-1 text-green-500" : ""
                      }
                    >
                      {user.emailVerified ? "VEREFIED" : "NOT VERIFIED"}
                    </span>
                  </div>
                </div>
                <div className="px-20 mt-20">
                  <div
                    className={`flex flex-wrap  w-full h-auto 
                  ${
                    countAndRemoveDuplicates(item).length >= 4
                      ? "justify-between"
                      : "justify-center gap-x-20"
                  } `}
                  >
                    {countAndRemoveDuplicates(item).map(
                      ({ item, count }, idx) => {
                        return (
                          <div key={idx} className="relative animate-bounce">
                            <p className="font-semibold absolute text-5xl  -top-[30px] right-[5px]">
                              {count}x
                            </p>
                            <img
                              src={item.mainpic}
                              alt="...."
                              className="w-[200px] h-[200px] object-fit "
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[500px] h-[400px] bg-white shadow-lg rounded-sm flex justify-center items-center">
              <div className="relative flex flex-col text-left gap-y-5">
                <div
                  className="z-[100] absolute -top-[90px] -right-[40px] cursor-pointer"
                  onClick={handleCloseModal}
                >
                  <svg
                    fill="red"
                    width="30px"
                    height="30px"
                    viewBox="-3.5 0 19 19"
                  >
                    <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold absolute -top-[70px]">
                  Continue with
                </h1>
                <button
                  className="text-left border px-24 py-5 flex gap-x-4 items-center hover:bg-gray-50"
                  onClick={handleGoogleLogin}
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="-0.5 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          ></path>
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p>Login Google</p>
                </button>
                <button
                  className="text-left border px-24 py-5 flex gap-x-4 items-center hover:bg-gray-50"
                  onClick={handleFacebookLogin}
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-200.000000, -160.000000)"
                        fill="#4460A0"
                      >
                        <path
                          d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                          id="Facebook"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <p>Login Facebook</p>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

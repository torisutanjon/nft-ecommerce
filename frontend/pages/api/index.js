export const signup_api = async (fname, lname, email, password) => {
  // console.log(fname, lname, email, password);
  const response = await fetch(`http://localhost:5000/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fname,
      lname,
      email,
      password,
    }),
  });
  const resdata = await response.json();
  return resdata;
};

export const login_api = async (email, password) => {
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const resdata = await response.json();
  return resdata;
};

export const getcollectionlist_api = async (token) => {
  const response = await fetch(
    "http://localhost:5000/publish/getcollectionlist",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
      }),
    }
  );
  const resdata = await response.json();
  return resdata;
};

export const getuserprofileinfo_api = async (token) => {
  const response = await fetch("http://localhost:5000/profile/getuserinfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  });

  const resdata = await response.json();
  return resdata;
};

export const updateuserprofile_api = async (
  token,
  username,
  bio,
  email,
  fblink,
  linkedinlink,
  twitterlink,
  walletaddress
) => {
  const response = await fetch("http://localhost:5000/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      token,
      username,
      bio,
      email,
      fblink,
      linkedinlink,
      twitterlink,
      walletaddress,
    }),
  });
  const resdata = await response.json();
  return resdata;
};

export const getuserprofilelogo_api = async (token) => {
  // const logo = await axios({
  //   method: "POST",
  //   url: "http://localhost:5000/profile/retrievelogo",
  //   data: {
  //     token,
  //   },
  // });
  // return logo;

  const response = await fetch("http://localhost:5000/profile/retrievelogo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
    }),
  });
  const resdata = await response.json();
  return resdata;
};

export const getuserprofilebanner_api = async (token) => {
  // const banner = await axios({
  //   method: "POST",
  //   url: "http://localhost:5000/profile/retrievebanner",
  //   data: {
  //     token,
  //   },
  // });
  // return banner;
  const response = await fetch("http://localhost:5000/profile/retrievebanner", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
    }),
  });
  const resdata = await response.json();
  return resdata;
};

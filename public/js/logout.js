//--- Logs the user out and redirects them to the homepage ---//
const logout = async () => {
  const response = await fetch("/api/trainer/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Something went wrong on logging you out.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);

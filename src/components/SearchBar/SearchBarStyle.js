const Style = {
  Container: {
    bgcolor: "#F9FCFB",
    boxShadow: 2,
    display: "flex",
    justifyContent: "center",
    padding: { xs: "20px 0", md: "40px 0" },
    textAlign: "center",
    transition: "box-shadow 0.3s",
    "&:hover": {
      boxShadow: 4,
    },
  },
  Box: {
    paddingTop: 6,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    width: { xs: "90%", md: "80%" },
    gap: 2,
  },
};

export default Style;
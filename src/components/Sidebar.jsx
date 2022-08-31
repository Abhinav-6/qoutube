import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar() {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" },
        justifyContent: "space-between",
        width: "10%",
        textAlign: "center",
        position: "sticky",
      }}
    >
      {categories.map((item) => (
        <button key={item.name}
          style={{
            border: "none",
            background: "#3071e8ff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px 0",
            borderRadius: "8px",
          }}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;

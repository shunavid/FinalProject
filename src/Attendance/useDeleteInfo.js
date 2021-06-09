import React from "react";
import axios from "axios";

function useDeleteInfo() {
  const deleteInfo = (userid, id) => {
    axios
      .delete(``)

      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return deleteInfo;
}
export default useDeleteInfo;

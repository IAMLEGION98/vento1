import React from "react";
import ReactFileReader from "react-file-reader";
import { withRouter, Route,BrowserRouter, Switch } from "react-router-dom";
import { csvJSON } from "./UploadCsv";
import { create } from "./utils/assets";
import { toast } from "react-toastify";
import AssetList from "./AssetList";

const MultiCreateAsset = (props) => {
  const handleFiles = files => {
    try {
        function go ()
      {
      var reader = new FileReader();
      reader.onload = async function(e) {
        var jsonArray = csvJSON(reader.result);
        console.log(jsonArray);
        await create(jsonArray);
      };
      
      
          reader.readAsText(files[0]);
      }
      const getData = async() => { 
        await go(); 
        props.history.push("/assetlist");
    } 
     getData()
      
    } catch (e) {
      console.log(e.code, e.message);
      toast(e.message, {
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div>
      <h3> Upload CSV </h3>
      <div>
        <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
          <button className="btn">Choose File</button>
        </ReactFileReader>
      </div>
    </div>
  );
};
export default withRouter(MultiCreateAsset);

import React from "react";
import MUIDataTable from "mui-datatables";
import { useFetch } from "./useFetch";

function AssetList(props) {
  const { data, error } = useFetch("/api/assets");
  var rowData = data["assets"];
  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        sort: true
      }
    },
    {
      name: "asset_type",
      label: "Asset Type",
      options: {
        filter: true,
        filterType: "textfield",
        sort: true
      }
    },
    {
      name: "productName",
      label: "Product Name",
      options: {
        filter: true,
        filterType: "textfield",
        sort: true
      }
    },
    {
      name: "ownerName",
      label: "Owner Name",
      options: {
        filter: true,
        filterType: "textfield",
        sort: true
      }
    },
    {
      name: "departmentName",
      label: "Department Name",
      options: {
        filter: true,
        filterType: "textfield",
        sort: true
      }
    }
  ];
  const options = {
    filterType: "textfield",
    selectableRows: "none",
    responsive: "scrollMaxHeight",
    selectableRows: false,
    print: false,
    download: false,
    viewColumns: false,
    textLabels: {
      body: {
        noMatch: props.isLoading ? <Loader /> : "Error: " + error
      }
    }
  };

  return (
    <div className="assetlist">
      <h1 className="assetlist-title"> LIST OF ASSETS </h1> 
      <div className="asset-list">
        <MUIDataTable
          title={"LIST OF ASSETS"}
          data={rowData}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}

export default AssetList;

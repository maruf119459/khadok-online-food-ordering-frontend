import React, { useState } from "react";
import {
  Card,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import OrderTable from "./OrderTable";

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "All", value: "ALL" },
];

const Orders = () => {
  const [filterValue, setFilterValue] = useState("ALL");

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
    console.log(`Selected filter: ${event.target.value}`); // Debugging or state tracking
  };

  return (
    <div className="px-2">
      <Card className="p-5">
        <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
          Order Status
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            row
            name="orderStatus"
            value={filterValue}
            onChange={handleFilter}
          >
            {orderStatus.map((status) => (
              <FormControlLabel
                key={status.value}
                value={status.value}
                control={<Radio />}
                label={status.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>
      <OrderTable/>
    </div>
  );
};

export default Orders;

const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");
const app = express();
const dotenv = require("dotenv").config();
const PORT = 5000;
// const authRoute = require('./routes/authRoute');
const authRoute = require("./routes/authRoutes.js");

const productRouter = require("./routes/productRoutes.js");
const blogRouter = require("./routes/blogRoute.js");
const categoryRouter = require("./routes/prodcategoryRoute.js");
const blogcategoryRouter = require("./routes/blogCatRoute.js");
const brandRouter = require("./routes/brandRoute.js");
const colorRouter = require("./routes/colorRoute.js");
const enqRouter = require("./routes/enqRoute.js");
const couponRouter = require("./routes/couponRoute.js");
const uploadRouter = require("./routes/uploadRoute.js");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});

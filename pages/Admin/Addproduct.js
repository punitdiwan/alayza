import React, { useState, useEffect } from "react";
import Header from "../../Components/Admin/Header";
import Footer from "../../Components/Footer";
import Router from "next/router";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import AWS, { Config, S3 } from "aws-sdk";
import s3 from "../../Components/DigitalOcean";

const Addproduct = () => {
  // const router = useRouter();
  // console.log(router.query);

  const [prodData, setProdData] = useState("");
  const [keydata, setKeyData] = useState();
  const [keydata1, setKeyData1] = useState();

  const categoryData = [
    {
      name: "cream",
      id: "1",
    },
    {
      name: "lotion",
      id: "2",
    },
    {
      name: "powder",
      id: "3",
    },
  ];

  // const [signedUrl, setSignedUrl] = useState();

  const [data, setData] = useState({
    prod_id: nanoid(),
    image: "",
    name: "",
    price: "",
    brand: "",
    category: "",
    description: "",
    qty: 1,
  });

  // const [selectedFile, setSelectedFile] = useState(null);

  // console.log(signedUrl, "url");

  // console.log(selectedFile?.name, "");

  const fetchData = async () => {
    const response = await fetch("/api/env");
    const data = await response.json();
    setKeyData(data.secretKey);
    setKeyData1(data.secretId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const spacesEndpoint = new AWS.Endpoint(
      "sgp1.digitaloceanspaces.com/zeba-ecom/"
    );
    const s3 = new AWS.S3({
      endpoint: spacesEndpoint,
      accessKeyId: keydata,
      secretAccessKey: keydata1,
    });

    let digitalOceanSpaces =
      "https://lmsimages.sgp1.digitaloceanspaces.com/zeba-ecom/";
    let bucketName = "lmsimages";

    if (e.target.files && e.target.files[0]) {
      const blob = e.target.files[0];
      const params = { Body: blob, Bucket: bucketName, Key: blob.name };
      // Sending the file to the Spaces
      s3.putObject(params)
        .on("build", (request) => {
          request.httpRequest.headers.Host = `${digitalOceanSpaces}`;
          request.httpRequest.headers["Content-Length"] = blob.size;
          request.httpRequest.headers["Content-Type"] = blob.type;
          request.httpRequest.headers["x-amz-acl"] = "public-read";
        })
        .send((err) => {
          if (err) errorCallback();
          else {
            // If there is no error updating the editor with the imageUrl
            var imageUrl = `${digitalOceanSpaces}` + blob.name;
            // callback(imageUrl, blob.name);
            console.log(imageUrl, "URL");
            setData({ ...data, image: imageUrl });
          }
        });
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // console.log(data.image, "add-data");

  const submitData = async () => {
    // console.log("fun start", signedUrl)
    // console.log("fun data", data)

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const fetchProducts = async () => {
    const response = await fetch(`api/products`);
    const productData = await response.json();
    // console.log(productData, "Data from API response");
    setProdData(productData);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <section className="add-product-main">
        <button
          onClick={() => Router.back()}
          className="global-btn"
          style={{ marginLeft: "10%", marginTop: "1rem" }}
        >
          Go back
        </button>
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="file"
            placeholder="Image URL"
            name="image"
            onChange={handleImageChange}
            // onChange={(e) => {
            //   handleChange(e);
            // }}
          />
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label>Category</label>
          <select
            onChange={(e) => {
              handleChange(e);
            }}
            name="category"
          >
            {categoryData.map((item) => {
              return (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              );
            })}

            {/* <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option> */}
          </select>
          {/* <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={(e) => {
              handleChange(e);
            }}
          /> */}
          <input
            type="text-area"
            placeholder="Description"
            name="description"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <Link
            href="Admin/AdminProduct"
            className="login-btn"
            style={{ margin: "0.3rem" }}
            onClick={submitData}
          >
            Create Product
          </Link>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Addproduct;

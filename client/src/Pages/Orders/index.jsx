import React, { useState } from "react";
import AccountSlideBar from "../../components/AccountSlideBar";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Badge from "../../components/Badge";

const Orders = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };

  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSlideBar />
        </div>

        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-5 px-5 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My orders</h2>
              <p>
                There are <span className="text-primary font-bold">2</span>{" "}
                orders
              </p>

              <div class="relative overflow-x-auto mt-5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        &nbsp;
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Order Id
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Paymant Id
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Phone Number
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Address
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Pincode
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Total Amount
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        User Id
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Order Status
                      </th>
                      <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white dark:bg-gray-800">
                      <td class="px-6 py-4">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] !text-[rgba(0,0,0,0.7)]"
                          onClick={() => isShowOrderedProduct(0)}
                        >
                          {isOpenOrderedProduct !== null ? (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span className="text-primary font-[500]">
                          762946382238092337128bsd723ibr9
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span className="text-primary font-[500]">
                          pay_nd9h872b3fy988293b
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-[500]">EREN JEAGER</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-[500]">0987654321</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-[500] block w-[400px]">
                          H No 222 Street No 6 Nghia Thinh Nghia Hung Nam Dinh
                          Viet Nam. +80-798236432
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-[500]">110927</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-[500]">3800</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-[500]">
                          eren.yeager.rumbling@gmail.com
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-[500] text-primary">
                          623923v878232g33ggv82283v2372
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-[500]">
                          <Badge status="pending" />
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-[500]">2025-06-13</span>
                      </td>
                    </tr>

                    {isOpenOrderedProduct === 0 && (
                      <tr>
                        <td class="bg-[#f1f1f1]" colSpan={6}>
                          <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                                <tr>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-6 py-3 whitespace-nowrap"
                                  >
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <span className="text-gray-600 font-[500]">
                                      762946382238092337128bsd723ibr9
                                    </span>
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <span className="font-[500]">
                                      A-Line Kurti With Sharara & Dupatta...
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <img
                                      src="https://serviceapi.spicezgold.com/download/1742439345825_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-2-202311010723.webp"
                                      className="w-[40px] aspect-[1/1] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="font-[500]">1</span>
                                  </td>
                                  <td className="px-6 py-4">
                                    <span className="font-[500]">1300</span>
                                  </td>
                                  <td className="px-6 py-4">
                                    <span className="font-[500]">1300</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;

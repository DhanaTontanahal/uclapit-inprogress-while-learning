import { gql, request } from "graphql-request";
const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/cm0r5ebo700xp07vzyaj29xle/master";

const getSlider = async () => {
  // const query = gql`
  //   query GetSlider {
  //     sliders {
  //       id
  //       name
  //       image {
  //         url
  //       }
  //     }
  //   }
  // `;
  // const result = await request(MASTER_URL, query);
  // return result;
};

export default { getSlider };

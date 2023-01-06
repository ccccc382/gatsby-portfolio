import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => filterBySlug(data, ["/about","/nsk","/dewaard","/flash","/senseo",]);



export default modifyGrid;


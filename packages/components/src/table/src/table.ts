import type { PropType } from "vue";
import type { ColumnStyle } from "element-plus";
import type { InterDefaults } from "@easy-study/utils";
import type { HeaderListItem } from "../../table-header";

import type Table from "./table.vue";

interface RowCellStyleProps {
  prop: string; // 样式判断标识
  value: any[] | string; // 样式判断值
  style: ColumnStyle<any>; // 样式
  [key: string]: any; // 额外参数
}

interface DefaultProps {
  page: string;
  tableData: any[];
  headerList: HeaderListItem[];
  customHeader?: boolean;
  operateList?: any[];
  customOperate?: boolean;
  operateWidth?: number | string;
  headerCellStyle?: any;
  rowCellStyle?: RowCellStyleProps[];
  offsetBottom?: number | string;
  env?: string;
}

export const defaultProps: InterDefaults<DefaultProps> = {
  page: "EsTablePage",
  tableData: [],
  headerList: [],
  customHeader: true,
  operateList: [],
  customOperate: true,
  operateWidth: 100,
  headerCellStyle: {
    background: "#f5f5f5",
    fontSize: "14px",
    color: "#333",
    padding: "15px 0",
  },
  rowCellStyle: [],
  offsetBottom: 40,
  env: "",
};

export type { RowCellStyleProps, DefaultProps };

export type EsTableInstance = InstanceType<typeof Table>;

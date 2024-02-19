import { PropType } from "vue";
import type { TableColumnCtx } from "element-plus";

interface HeaderListItem{
  prop: string;
  label: string;
  width?: number;
  slot?: boolean;
  formatter?: (row: Record<string, any>, column: TableColumnCtx<any>) => string;
  sortable?: boolean | string;
  tooltip?: boolean;
  [key: string]: any;
}

export const tableHeader = {
  page: {
    type: String,
    default: "EsTablePage",
  },
  headerList: {
    type: Array as PropType<HeaderListItem[]>,
  },
} as const;

export type { HeaderListItem };

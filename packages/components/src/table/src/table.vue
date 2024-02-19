<script setup lang="ts">
import { ref, watch } from "vue";
import { defaultProps, RowCellStyleProps, DefaultProps } from "./table";
import type { HeaderListItem } from "../../table-header";

import { ElTable, ElTableColumn, TableInstance } from "element-plus";

const props =  withDefaults(defineProps<DefaultProps>(), defaultProps);
const data = [{ id: 1, name: "张三", age: 30, address: "北京" }];

const height = ref<string>();
const tableRef = ref<TableInstance>();
const getTableHeight = () => {
  const { top } = tableRef.value?.$el.getBoundingClientRect();
  height.value = `calc(100vh - ${top + props.offsetBottom}px)`;
};

const rowStyle = ({ row }: { row: any }) => {
  const { rowCellStyle } = props;
  let css = {};
  if (rowCellStyle.length) {
    rowCellStyle.forEach((item: RowCellStyleProps) => {
      const { prop, value, style } = item;
      const type = typeof row[prop];
      if (type === "boolean" || (type === "number" && row[prop] === value)) {
        css = style;
      } else if (typeof value !== "number" && value.includes(row[prop])) {
        css = style;
      }
    });
  }
  return css;
};

const columnList = ref<any[]>();

watch(
  [() => props.defaultProps, () => tableRef.value],
  ([data, table]) => {
    if (table) {
      getTableHeight();
      table.doLayout();
    }
  },
  {
    deep: true,
  }
);
</script>

<template>
  <el-table
    ref="EsTableRef"
    :data="tableData"
    :height="height"
    :header-cell-style="headerCellStyle"
    :row-style="rowStyle"
  >
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="age" label="年龄" />
    <el-table-column prop="address" label="地址" />
  </el-table>
</template>

<style lang="scss"></style>

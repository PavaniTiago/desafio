"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, RefreshCcw, Settings2, ShieldBan } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Payment, data } from "@/lib/data-table"
import { InputIcon } from "../../icon-input"
import { ExcludeButton } from "../../exclude-button"
import { EditButton } from "../../edit-button"

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "nome",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-neutral-200 transition-all hover:text-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("nome")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-neutral-200 transition-all hover:text-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          E-mail
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "cpf",
    header: () => <span>CPF</span>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("cpf")}</div>,
  },
  {
    accessorKey: "cellPhone",
    header: () => <span>Telefone</span>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("cellPhone")}</div>,
  },
  {
    accessorKey: "groupName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-neutral-200 transition-all hover:text-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Unidades de grupo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("groupName")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <span>Ações</span>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 py-2">
          <ExcludeButton />
          <EditButton />
          <Button className="border-0 p-0 w-5 h-5 shadow-none" variant="link"><ShieldBan className="w-4 h-4 text-secondary"/></Button>
          <Button className="border-0 p-0 w-5 h-5 shadow-none" variant="link"><RefreshCcw className="w-4 h-4 text-secondary"/></Button>
        </div>
      )
    },
  },
]

export function DataTableWithNoAcess() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center bg-white rounded-t-2xl py-4 px-4">
        <InputIcon
          placeholder="Buscar"
          icon="/search.svg"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto rounded-xl hover:bg-neutral-200 border-muted-foreground text-secondary-foreground font-normal text-sm">
              <Settings2 className="text-secondary mr-2 h-4 w-4" /> Colunas
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize hover:bg-neutral-200"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border-y border-y-muted-foreground bg-white">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-y-muted-foreground">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-secondary-foreground ">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                className="border-y-muted-foreground"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted">
          <div>
          <label htmlFor="pageSize">Mostrando{" "}</label>
          <select
            id="pageSize"
            value={table.getState().pagination.pageSize}
            onChange={e => table.setPageSize(Number(e.target.value))}
            className="border rounded-xl p-0.5 text-black border-muted-foreground"
          >
            {[10, 15, 20, 25, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          {" "}
          de <span className="text-black">{table.getFilteredRowModel().rows.length}</span> resultados
        </div>
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-neutral-200 transition-all"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-neutral-200 transition-all"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

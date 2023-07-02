import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const FileInput: FC = (props: Props) => {

  return (<>
        <h1>File Input</h1>
        <p>File Input is a an input field for uploading files.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
              <TableItem name='form-control' type='component' description="Container element" />
              <TableItem name='label' type='component' description="For helper text" />
              <TableItem name='file-input' type='component' description="For <input> element" />

              <TableItem name='file-input-bordered' type='modifier' description="Adds border to input" />
              <TableItem name='file-input-ghost' type='modifier' description="Adds ghost style to input" />
              <TableItem name='file-input-primary' type='modifier' description="Adds `primary` color to input" />
              <TableItem name='file-input-secondary' type='modifier' description="Adds `secondary` color to input" />
              <TableItem name='file-input-accent' type='modifier' description="Adds `accent` color to input" />
              <TableItem name='file-input-info' type='modifier' description="Adds `info` color to input" />
              <TableItem name='file-input-success' type='modifier' description="Adds `success` color to input" />
              <TableItem name='file-input-warning' type='modifier' description="Adds `warning` color to input" />
              <TableItem name='file-input-error' type='modifier' description="Adds `error` color to input" />

              <TableItem name='file-input-lg' type='responsive' description="Large size for input" />
              <TableItem name='file-input-md' type='responsive' description="Medium (default) size for input" />
              <TableItem name='file-input-sm' type='responsive' description="Small size for input" />
              <TableItem name='file-input-xs' type='responsive' description="Extra small size for input" />
            </tbody>
          </table>
        </div>

        <FileInputTabs />
        <FileInputWithBorderTabs />
        <FileInputGhostTabs />
        <FileInputWithFormControlTabs />
        <FileInputPrimaryTabs />
        <FileInputSecondaryTabs />
        <FileInputAccentTabs />

        <FileInputInfoTabs />
        <FileInputSuccessTabs />
        <FileInputWarningTabs />
        <FileInputErrorTabs />

        <FileInputSizesTabs />
        <FileInputDisabledTabs />
    </>
  )
}

export default FileInput

const FileInputTabs:FC = () => <WithTabs title="File Input">
    <input type="file" className="file-input w-full max-w-xs" />
</WithTabs>

const FileInputWithBorderTabs:FC = () => <WithTabs title="File Input with border">
    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
</WithTabs>

const FileInputGhostTabs:FC = () => <WithTabs title="Ghost (no background)">
    <input type="file" className="file-input file-input-ghost w-full max-w-xs" />
</WithTabs>

const FileInputWithFormControlTabs:FC = () => <WithTabs title="With form-control and labels">
    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Pick a file</span>
            <span className="label-text-alt">Alt label</span>
        </label>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        <label className="label">
            <span className="label-text-alt">Alt label</span>
            <span className="label-text-alt">Alt label</span>
        </label>
    </div>
</WithTabs>

const FileInputPrimaryTabs:FC = () => <WithTabs title="Primary color">
    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
</WithTabs>

const FileInputSecondaryTabs:FC = () => <WithTabs title="Secondary color">
    <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
</WithTabs>

const FileInputAccentTabs:FC = () => <WithTabs title="Accent color">
    <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
</WithTabs>


const FileInputInfoTabs:FC = () => <WithTabs title="Info color">
    <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
</WithTabs>

const FileInputSuccessTabs:FC = () => <WithTabs title="Success color">
    <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
</WithTabs>

const FileInputWarningTabs:FC = () => <WithTabs title="Warning color">
    <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
</WithTabs>

const FileInputErrorTabs:FC = () => <WithTabs title="Error color">
    <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
</WithTabs>

const FileInputSizesTabs:FC = () => <WithTabs title="Sizes">
    <div className="flex flex-col gap-2">
        <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
        <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
        <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
        <input type="file" className="file-input file-input-bordered file-input-lg w-full max-w-xs" />
    </div>
</WithTabs>

const FileInputDisabledTabs:FC = () => <WithTabs title="Disabled">
    <input type="file" placeholder="You can't touch this" className="file-input file-input-bordered w-full max-w-xs" disabled />
</WithTabs>
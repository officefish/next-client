import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Rating: FC = (props: Props) => {

  return (<>
        <h1>Rating</h1>
        <p>Rating is a set of radio buttons that allow the user to rate something.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
                <TableItem name='rating' type='component' description="Wrapper component for radio buttons" />
                <TableItem name='rating-half' type='modifier' description="To shows half of the shape" />
                <TableItem name='rating-hidden' type='modifier' description="hides the input. Useful to clear the the rating" />
                <TableItem name='rating-lg' type='responsive' description="Large rating" />
                <TableItem name='rating-md' type='responsive' description="Medium rating (default)" />
                <TableItem name='rating-sm' type='responsive' description="Small rating" />
                <TableItem name='rating-xs' type='responsive' description="Extra small rating" />
            </tbody>
          </table>
        </div>

        <RatingTabs /> 
    </>
  )
}

export default Rating

const RatingTabs:FC =  () => <WithTabs title="Rating">
    <div className="rating">
      <input type="radio" name="rating-1" className="mask mask-star" />
      <input type="radio" name="rating-1" className="mask mask-star" checked={true} onChange={()=>{}}/>
      <input type="radio" name="rating-1" className="mask mask-star" />
      <input type="radio" name="rating-1" className="mask mask-star" />
      <input type="radio" name="rating-1" className="mask mask-star" />
    </div>
</WithTabs>








import React from 'react';

export const DocumentSummaryTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left py-2 text-gray-700">Description</th>
            <th className="text-right py-2 text-gray-700">Quantity</th>
            <th className="text-right py-2 text-gray-700">Unit Price</th>
            <th className="text-right py-2 text-gray-700">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2">Full home rewiring service</td>
            <td className="text-right py-2">1</td>
            <td className="text-right py-2">£2,500.00</td>
            <td className="text-right py-2">£2,500.00</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2">Premium electrical outlets</td>
            <td className="text-right py-2">12</td>
            <td className="text-right py-2">£25.00</td>
            <td className="text-right py-2">£300.00</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2">LED light fixtures</td>
            <td className="text-right py-2">8</td>
            <td className="text-right py-2">£45.00</td>
            <td className="text-right py-2">£360.00</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2">Consumer unit replacement</td>
            <td className="text-right py-2">1</td>
            <td className="text-right py-2">£350.00</td>
            <td className="text-right py-2">£350.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}></td>
            <td className="text-right py-2 font-semibold">Subtotal</td>
            <td className="text-right py-2">£3,510.00</td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td className="text-right py-2 font-semibold">VAT (20%)</td>
            <td className="text-right py-2">£702.00</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td colSpan={2}></td>
            <td className="text-right py-2 font-bold">Total</td>
            <td className="text-right py-2 font-bold">£4,212.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

import React from "react";
// import SidebarComp from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";

HighchartsExporting(Highcharts);

export default function dashboard() {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Grafik Contoh",
    },
    tooltip: {
      formatter: function () {
        return `<b>${this.point.name}</b><br>Value: ${this.point.y}`;
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        colors: ["#9c9c9c", "#00ff00"],
        borderRadius: 5,
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
          distance: -50,
          filter: {
            property: "percentage",
            operator: ">",
            value: 4,
          },
        },
      },
    },
    exporting: {
      buttons: {
        contextButton: {
          menuItems: [
            "downloadPNG",
            "downloadJPEG",
            "downloadPDF",
            "downloadSVG",
            "downloadCSV",
          ],
        },
      },
    },
    series: [
      {
        data: [
          { name: "Return", y: 20 },
          { name: "New", y: 12 },
        ],
      },
    ],
  };

  return (
    <>
      {/* <SidebarComp /> */}
      <div className="p-4 bg-[#F4F4F4]">
        <div className="flex justify-between p-3">
          <div className="p-2">
            <span className="text-2xl font-semibold">Dashboard</span>
          </div>
          <div className="flex p-2 gap-4">
            <div>
              <form class="max-w-sm mx-auto">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                >
                  <option selected>Semua CS</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
            </div>
            <div>
              <button
                type="button"
                className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-3 py-2  bg-[#3d7ce8]  text-white  border-gray-600"
              >
                <FontAwesomeIcon icon={faDownload} /> Download
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 my-4">
          <div className="flex items-center px-3 rounded bg-gray-50 ">
            <div className="w-full p-3 ">
              <div className="text-lg text-gray-800">Daily</div>
              <div className="flex justify-between">
                <div className="text-4xl">
                  <p className="text-gray-600 font-bold">5</p>
                </div>
                <div className="grid justify-items-end">
                  <div className="font-semibold text-gray-400 text-xl ">1</div>
                  <div className="font-semibold text-gray-400 text-sm ">
                    Yesterday 20
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 rounded bg-gray-50 ">
            <div className="w-full p-3 ">
              <div className="text-lg text-gray-800">Weekyl</div>
              <div className="flex justify-between">
                <div className="text-4xl">
                  <p className="text-gray-600 font-bold">5</p>
                </div>
                <div className="grid justify-items-end">
                  <div className="font-semibold text-gray-400 text-xl ">1</div>
                  <div className="font-semibold text-gray-400 text-sm ">
                    Yesterday 20
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 rounded bg-gray-50 ">
            <div className="w-full p-3 ">
              <div className="text-lg text-gray-800">Monthly</div>
              <div className="flex justify-between">
                <div className="text-4xl">
                  <p className="text-gray-600 font-bold">5</p>
                </div>
                <div className="grid justify-items-end">
                  <div className="font-semibold text-gray-400 text-xl ">1</div>
                  <div className="font-semibold text-gray-400 text-sm ">
                    Yesterday 20
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 rounded bg-gray-50 ">
            <div className="w-full p-3 ">
              <div className="text-lg text-gray-800">Today</div>
              <div className="flex justify-between">
                <div className="text-4xl">
                  <p className="text-gray-600 font-bold">5</p>
                </div>
                <div className="grid justify-items-end">
                  <div className="font-semibold text-gray-400 text-xl ">1</div>
                  <div className="font-semibold text-gray-400 text-sm ">
                    Yesterday 20
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="w-full p-4 bg-gray-50 rounded-md border">
            <div className="mixed-chart">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
                width={150}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="w-full p-4 bg-gray-50 rounded-md border">
              <div className="p-2">
                <span className="text-lg">Avg Chat</span>
                <div className="pt-4 flex justify-between">
                  <div>Galoo</div>
                  <div className="font-semibold">19</div>
                </div>
                <div className="pt-4 flex justify-between">
                  <div>Galoo</div>
                  <div className="font-semibold">19</div>
                </div>
                <div className="pt-4 flex justify-between">
                  <div>Galoo</div>
                  <div className="font-semibold">19</div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 bg-gray-50 rounded-md border">
              <div className="p-2">
                <span className="text-lg">Contact</span>
                <div className="pt-4 flex justify-between">
                  <div>New Contact</div>
                  <div className="font-semibold">19</div>
                </div>
                <div className="pt-4 flex justify-between">
                  <div>Total Contact</div>
                  <div className="font-semibold">19</div>
                </div>
              </div>
            </div>
            <div className="w-full col-span-2 p-4 bg-gray-50 rounded-md border">
              <div className="p-2">
                <span className="text-lg">Responsive Time</span>
                <div className="pt-4 flex justify-between">
                  <div>First Responsive</div>
                  <div className="font-semibold">19s</div>
                </div>
                <div className="pt-4 flex justify-between">
                  <div>Avg Responsive</div>
                  <div className="font-semibold">20s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

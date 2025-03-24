export default function ProgramText() {
    return (
      <div className="col-span-3">
        <h3 className="text-2xl font-bold mt-4">SCHOLARSHIP AND PRIZE AWARD EXAMINATION</h3>
        <p className="mt-2 text-gray-400">
          Inter-Region VPC peering provides a simple and cost-effective way to
          share resources between Regions or replicate data for geographic
          redundancy. Data that is transferred across inter-Region VPC peering
          connections is charged at the standard inter-Region data transfer rates.
          <br />
          <br />
          Inter-Region VPC peering enables VPC resources to communicate with each
          other using private IP addresses without requiring gateways, VPN
          connections, or separate network appliances. Some examples of VPC
          resources include Amazon Elastic Compute Cloud (Amazon EC2) instances,
          Amazon Relational Database Service (Amazon RDS) databases, and AWS
          Lambda functions that run in different Regions.
          <br />
          <br />
          Traffic remains in the private IP address space. All inter-Region
          traffic is encrypted with no single point of failure or bandwidth
          bottleneck. Traffic always stays on the global AWS backbone. Traffic
          never traverses the public internet, which reduces threats, such as
          common exploits and distributed denial-of-service (DDoS) attacks.
        </p>
      </div>
    );
  }

//   export default function ProgramText() {
//     return (
//       <div className="col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h3 className="text-2xl font-bold mt-4">Elite Training B2</h3>
//         <p className="mt-2 text-gray-400">
//           Inter-Region VPC peering provides a simple and cost-effective way to...
//         </p>
//       </div>
//     );
//   }
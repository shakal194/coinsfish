const IPWhitelists = () => {
  return (
    <section className="block_textbox_dynamic_slider white_section flex w-full max-w-full flex-col pb-[72px] pt-[32px] lg:py-40">
      <div className="container mx-auto w-full max-w-[1356px] px-4">
        <div className="block_textbox_dynamic_slider_row block_business_model_slider_row mb-[-56px] ml-0 mr-0 flex flex-col justify-between lg:flex-row lg:flex-wrap">
          <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-full lg:max-w-[32%]">
            <h4 className="mb-[16px] text-[24px] font-semibold">
              IP Whitelists &amp; Permissions
            </h4>
            <p className="text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
              Whitelist settings mean that you can allow connection only to the
              specific IPs (access to API). Permission settings give you the
              flexibility to differentiate your employees’ rights including
              roles like “view only” and “withdrawals with confirmation”.
            </p>
          </div>
          <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-full lg:max-w-[32%]">
            <h4 className="mb-[16px] text-[24px] font-semibold">
              Scalable and Secure Servers
            </h4>
            <p className="text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
              Our infrastructure incorporates various layers of security and
              scalability with loadbalancers across several data centres,
              ensuring the stability of the whole system and the lowest possible
              latency.
            </p>
          </div>
          <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-full lg:max-w-[32%]">
            <h4 className="mb-[16px] text-[24px] font-semibold">
              Security Patches and Upgrades
            </h4>
            <p className="text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
              Periodic updates and patches enable you to consistently maintain
              security as well as increase and optimise the system’s
              functionality.
            </p>
          </div>
          <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-full lg:max-w-[32%]">
            <h4 className="mb-[16px] text-[24px] font-semibold">
              Backups &amp; Storage
            </h4>
            <p className="text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
              Backups in combination with a distributed file system with no
              single point of failure provide the ultimate guarantee against
              loss of data.
            </p>
          </div>
          <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-full lg:max-w-[32%]">
            <h4 className="mb-[16px] text-[24px] font-semibold">
              Secure API Access
            </h4>
            <p className="text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
              Our API endpoints are encrypted through SSL so user traffic is
              secured when data is requested. We require that our clients check
              the API callback requests for maximum security.
            </p>
          </div>
          <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-full lg:max-w-[32%]">
            <h4 className="mb-[16px] text-[24px] font-semibold">
              WAF &amp; Anti-DDoS
            </h4>
            <p className="text-base font-normal leading-[26px] text-gray-700 dark:text-gray-400">
              Application-level protection with a web application firewall,
              continuous monitoring, and automatic mitigation of network attack
              risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPWhitelists;

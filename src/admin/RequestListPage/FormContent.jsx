export const formContent = (request) => {`
       <div style="font-family: Arial, sans-serif; line-height: 1.6; ">
       <h2 style="text-align: center; color: black;">Permission Letter</h2>
      <p style="margin: 8px 0; font-weight: bold;">From:</p>
      <p style="margin-top: 10px; margin-left: 30px;">
        ${request.firstName}<br>
        ${request.year}, ${request.department}<br>
        NSN College of Engineering and Technology<br>
        Karur - 639003
      </p>
      <p style="margin-top: 20px; font-weight: bold;">To:</p>
      <p style="margin-top: 10px; margin-left: 30px;">
        The Transport Officer<br>
        NSN College of Engineering and Technology<br>
        Karur - 639003
      </p>
      <p style="margin-top: 20px; font-weight: bold;">Respected Sir/Madam,</p>
      <p style="margin-top: 10px; margin-left: 30px;">
        Sub: Change of bus route - Reg
      </p>
      <p style="margin-left: 20px; margin: 8px 0; text-indent: 30px;">
        With due respect, I would like to inform you that I wish to change 
        from Bus No. <span style="font-weight: 600;">${request.previousBusNo} </span> to Bus No. <span style="font-weight: 600;">${request.newBusNo} </span>
        due to personal reasons <span style="font-weight: 600;">${request.purpose}</span>. 
        I kindly request you to grant me permission for this change.
      </p>
      <p style="margin-top: 20px; text-align: center;">Thank You.</p>
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <p style="margin: 8px 0;">
          Date:<br>
          Place: Karur
        </p>
        <div>
        <p style="margin: 8px 0; font-weight: bold;">Yours truly,</p>
        <p style="margin-top: 2px;">${request.firstName}</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 50px;">
        <p>HOD</p>
        <p>Transport Officer</p>
        <p>Principal</p>
      </div>
    </div>
    `;
}
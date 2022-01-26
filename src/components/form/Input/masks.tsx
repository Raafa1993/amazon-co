// (00) 00000-0000
function maskPhone(e: any) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d{4})(\d)/, "$1-$2");

  e.currentTarget.value = value;
  return e;
}

// 00000-000
function maskCEP(e: any) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");

  e.currentTarget.value = value;
  return e;
}

// 00/00/0000
function maskDate(e: any) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "$1/$2");
  value = value.replace(/(\d{2})(\d)/, "$1/$2");
  value = value.replace(/(\d{4})(\d)/, "$1");

  e.currentTarget.value = value;
  return e;
}

function maskCPF(e: any) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2");
  value = value.replace(/(-\d{2})\d+?$/, "$1");

  e.currentTarget.value = value;
  return e;
}

function currency(e: any) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1.$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
}

export { maskCPF, maskDate, maskCEP, maskPhone, currency };

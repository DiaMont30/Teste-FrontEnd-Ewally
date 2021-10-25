export const goToAccount = (history) => {
    history.push("/account")
}

export const goToLogin = (history) => {
    history.push("/")
}

export const logout = (history) => {
    const beSure = window.confirm("Você tem certeza que deseja sair da conta?")
    if (beSure) {
      localStorage.removeItem("token");
      goToLogin(history)
    }
  }
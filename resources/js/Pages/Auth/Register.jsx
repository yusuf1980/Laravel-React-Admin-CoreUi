import { useEffect } from "react";
import { Link, useForm } from "@inertiajs/react";
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
    CCardTitle,
    CAlert
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardTitle>
                                {(errors.email || errors.name || errors.password) && (
                                    <CAlert color="danger">
                                        {errors.name? errors.name:''}
                                        {errors.email? errors.email:''}
                                        {errors.password? errors.password:''} <br />
                                    </CAlert>
                                )}
                            </CCardTitle>
                            <CCardBody className="p-4">
                                <CForm onSubmit={submit}>
                                    <h1>Register</h1>
                                    <p className="text-medium-emphasis">
                                        Create your account
                                    </p>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilUser} />
                                        </CInputGroupText>
                                        <CFormInput
                                            name="name"
                                            value={data.name}
                                            placeholder="Name"
                                            autoComplete="Name"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>@</CInputGroupText>
                                        <CFormInput
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            placeholder="Email"
                                            autoComplete="email"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            required
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilLockLocked} />
                                        </CInputGroupText>
                                        <CFormInput
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            placeholder="Password"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-4">
                                        <CInputGroupText>
                                            <CIcon icon={cilLockLocked} />
                                        </CInputGroupText>
                                        <CFormInput
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            placeholder="Repeat password"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </CInputGroup>
                                    <div className="d-grid">
                                        <CButton type="submit" color="success">
                                            Create Account
                                        </CButton>
                                    </div>
                                </CForm>
                                <Link
                                    href={route("login")}
                                    className="mt-2"
                                >
                                    Already registered?
                                </Link>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
}
